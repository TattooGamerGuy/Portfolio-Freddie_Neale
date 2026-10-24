// Azure provider stubs. Intentionally no Azure SDK dependency yet: every call throws
// AzureNotConfiguredError until real credentials and SDK wiring are added.
// Targets: Cosmos DB / Azure SQL (documents), Blob Storage (blobs), Entra ID (auth), Event Hubs (events).
// Hosting: App Service / Container Apps / Static Web Apps (see infra/azure).
import type { CloudProvider } from "./types";

export interface AzureConfig {
  cosmosEndpoint?: string;
  cosmosDatabase?: string;
  sqlConnectionString?: string;
  storageAccount?: string;
  storageContainer?: string;
  tenantId?: string;
  clientId?: string;
  eventHubsNamespace?: string;
  eventHubName?: string;
}

type Env = Record<string, string | undefined>;

export function readAzureConfig(env: Env = process.env): AzureConfig {
  return {
    cosmosEndpoint: env.AZURE_COSMOS_ENDPOINT,
    cosmosDatabase: env.AZURE_COSMOS_DATABASE,
    sqlConnectionString: env.AZURE_SQL_CONNECTION_STRING,
    storageAccount: env.AZURE_STORAGE_ACCOUNT,
    storageContainer: env.AZURE_STORAGE_CONTAINER,
    tenantId: env.AZURE_TENANT_ID,
    clientId: env.AZURE_CLIENT_ID,
    eventHubsNamespace: env.AZURE_EVENTHUBS_NAMESPACE,
    eventHubName: env.AZURE_EVENTHUB_NAME,
  };
}

export class AzureNotConfiguredError extends Error {
  constructor(service: string) {
    super("Azure " + service + " is not configured yet. Set CLOUD_PROVIDER=local (default) or wire the Azure SDK.");
    this.name = "AzureNotConfiguredError";
  }
}

const notConfigured = (service: string) => async (): Promise<never> => { throw new AzureNotConfiguredError(service); };

export function createAzureProvider(config: AzureConfig = readAzureConfig()): CloudProvider & { config: AzureConfig } {
  return {
    name: "azure",
    config,
    documents: {
      get: notConfigured("Cosmos DB"),
      list: notConfigured("Cosmos DB"),
      put: notConfigured("Cosmos DB"),
      remove: notConfigured("Cosmos DB"),
    },
    blobs: { put: notConfigured("Blob Storage"), get: notConfigured("Blob Storage"), remove: notConfigured("Blob Storage") },
    auth: { getCurrentUser: notConfigured("Entra ID") },
    events: { publish: notConfigured("Event Hubs") },
  };
}
