// Freddie Neale Portfolio: Azure backend infrastructure (template only; not deployed).
// Deploy later with: az deployment group create -g <rg> -f infra/azure/main.bicep -p infra/azure/main.parameters.json
targetScope = 'resourceGroup'

@description('Short app name used in resource names.')
param appName string = 'portfolio'

@allowed(['dev', 'test', 'prod'])
param environmentName string = 'dev'

param location string = resourceGroup().location

@allowed(['appService', 'containerApps', 'staticWebApp'])
@description('Hosting model for the app.')
param hosting string = 'appService'

@description('Provision Event Hubs for telemetry / domain events.')
param enableEventHubs bool = true

@description('Provision Azure SQL in addition to Cosmos DB.')
param enableSql bool = false

@secure()
@description('Azure SQL admin password (only when enableSql = true). Supply at deploy time; never commit.')
param sqlAdminPassword string = ''

var suffix = uniqueString(resourceGroup().id, appName, environmentName)
var baseName = '${appName}-${environmentName}'
var tags = { app: appName, env: environmentName, managedBy: 'bicep' }

resource identity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'id-${baseName}'
  location: location
  tags: tags
}

resource logs 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: 'log-${baseName}'
  location: location
  tags: tags
  properties: { sku: { name: 'PerGB2018' }, retentionInDays: 30 }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'appi-${baseName}'
  location: location
  kind: 'web'
  tags: tags
  properties: { Application_Type: 'web', WorkspaceResourceId: logs.id }
}

resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: take('kv${appName}${suffix}', 24)
  location: location
  tags: tags
  properties: {
    tenantId: subscription().tenantId
    sku: { family: 'A', name: 'standard' }
    enableRbacAuthorization: true
  }
}

resource cosmos 'Microsoft.DocumentDB/databaseAccounts@2024-05-15' = {
  name: take('cosmos-${appName}-${suffix}', 44)
  location: location
  kind: 'GlobalDocumentDB'
  tags: tags
  properties: {
    databaseAccountOfferType: 'Standard'
    locations: [ { locationName: location, failoverPriority: 0 } ]
    capabilities: [ { name: 'EnableServerless' } ]
    disableLocalAuth: true
  }
}

resource cosmosDb 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2024-05-15' = {
  parent: cosmos
  name: 'portfolio'
  properties: { resource: { id: 'portfolio' } }
}

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: take('st${appName}${suffix}', 24)
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
  tags: tags
  properties: { allowBlobPublicAccess: false, minimumTlsVersion: 'TLS1_2', allowSharedKeyAccess: false }
}

resource blobService 'Microsoft.Storage/storageAccounts/blobServices@2023-05-01' = {
  parent: storage
  name: 'default'
}

resource filesContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2023-05-01' = {
  parent: blobService
  name: 'portfolio-files'
}

resource eventHubs 'Microsoft.EventHub/namespaces@2024-01-01' = if (enableEventHubs) {
  name: take('evhns-${appName}-${suffix}', 50)
  location: location
  sku: { name: 'Basic', tier: 'Basic', capacity: 1 }
  tags: tags
  properties: { disableLocalAuth: true }
}

resource eventHub 'Microsoft.EventHub/namespaces/eventhubs@2024-01-01' = if (enableEventHubs) {
  parent: eventHubs
  name: 'portfolio-events'
  properties: { partitionCount: 2, messageRetentionInDays: 1 }
}

resource sqlServer 'Microsoft.Sql/servers@2023-08-01-preview' = if (enableSql) {
  name: take('sql-${appName}-${suffix}', 60)
  location: location
  tags: tags
  properties: { administratorLogin: 'sqladmin', administratorLoginPassword: sqlAdminPassword, minimalTlsVersion: '1.2' }
}

resource sqlDb 'Microsoft.Sql/servers/databases@2023-08-01-preview' = if (enableSql) {
  parent: sqlServer
  name: 'portfolio'
  location: location
  sku: { name: 'Basic' }
}

var appSettings = [
  { name: 'CLOUD_PROVIDER', value: 'azure' }
  { name: 'AZURE_CLIENT_ID', value: identity.properties.clientId }
  { name: 'AZURE_COSMOS_ENDPOINT', value: cosmos.properties.documentEndpoint }
  { name: 'AZURE_COSMOS_DATABASE', value: 'portfolio' }
  { name: 'AZURE_STORAGE_ACCOUNT', value: storage.name }
  { name: 'AZURE_STORAGE_CONTAINER', value: 'portfolio-files' }
  { name: 'AZURE_EVENTHUBS_NAMESPACE', value: enableEventHubs ? '${eventHubs.name}.servicebus.windows.net' : '' }
  { name: 'AZURE_EVENTHUB_NAME', value: 'portfolio-events' }
  { name: 'APPLICATIONINSIGHTS_CONNECTION_STRING', value: appInsights.properties.ConnectionString }
]

resource plan 'Microsoft.Web/serverfarms@2023-12-01' = if (hosting == 'appService') {
  name: 'plan-${baseName}'
  location: location
  kind: 'linux'
  sku: { name: 'B1' }
  tags: tags
  properties: { reserved: true }
}

resource webApp 'Microsoft.Web/sites@2023-12-01' = if (hosting == 'appService') {
  name: 'app-${baseName}-${take(suffix, 6)}'
  location: location
  tags: tags
  identity: { type: 'UserAssigned', userAssignedIdentities: { '${identity.id}': {} } }
  properties: {
    serverFarmId: plan.id
    httpsOnly: true
    siteConfig: { linuxFxVersion: 'NODE|22-lts', minTlsVersion: '1.2', appSettings: appSettings }
  }
}

resource containerEnv 'Microsoft.App/managedEnvironments@2024-03-01' = if (hosting == 'containerApps') {
  name: 'cae-${baseName}'
  location: location
  tags: tags
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: { customerId: logs.properties.customerId, sharedKey: logs.listKeys().primarySharedKey }
    }
  }
}

resource containerApp 'Microsoft.App/containerApps@2024-03-01' = if (hosting == 'containerApps') {
  name: 'ca-${baseName}'
  location: location
  tags: tags
  identity: { type: 'UserAssigned', userAssignedIdentities: { '${identity.id}': {} } }
  properties: {
    managedEnvironmentId: containerEnv.id
    configuration: { ingress: { external: true, targetPort: 3000 } }
    template: {
      containers: [ {
        name: appName
        image: 'mcr.microsoft.com/k8se/quickstart:latest'
        resources: { cpu: json('0.5'), memory: '1Gi' }
        env: [for s in appSettings: { name: s.name, value: s.value }]
      } ]
      scale: { minReplicas: 0, maxReplicas: 2 }
    }
  }
}

resource staticSite 'Microsoft.Web/staticSites@2023-12-01' = if (hosting == 'staticWebApp') {
  name: 'swa-${baseName}'
  location: location
  tags: tags
  sku: { name: 'Free', tier: 'Free' }
  properties: {}
}

// RBAC: managed identity gets data-plane access (no keys/connection strings).
resource blobDataRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storage.id, identity.id, 'blob-data-contributor')
  scope: storage
  properties: {
    principalId: identity.properties.principalId
    principalType: 'ServicePrincipal'
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')
  }
}

resource cosmosDataRole 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2024-05-15' = {
  parent: cosmos
  name: guid(cosmos.id, identity.id, 'cosmos-data-contributor')
  properties: {
    principalId: identity.properties.principalId
    roleDefinitionId: '${cosmos.id}/sqlRoleDefinitions/00000000-0000-0000-0000-000000000002'
    scope: cosmos.id
  }
}

output cosmosEndpoint string = cosmos.properties.documentEndpoint
output storageAccountName string = storage.name
output managedIdentityClientId string = identity.properties.clientId
output keyVaultName string = keyVault.name
