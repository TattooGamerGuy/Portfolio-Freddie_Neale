# Freddie Neale Portfolio: Azure backend

Azure is the backend target for Freddie Neale Portfolio. **Mock/simulated data stays the default** until real credentials are plugged in.

## How it works

- Code: `lib/cloud/` is the provider abstraction.
  - `local` (default, `CLOUD_PROVIDER=local` or unset): in-process store that wraps the app's existing mock/local data. App behavior is unchanged.
  - `azure`: stubs that throw `AzureNotConfiguredError` until the Azure SDKs are wired in.
- Service mapping:

| Concern | Local | Azure |
| --- | --- | --- |
| Records / documents | in-memory + existing mock data | Cosmos DB (serverless, NoSQL) or Azure SQL (`enableSql`) |
| Files | in-memory blob map | Blob Storage (`portfolio-files` container) |
| Auth | fixed local dev user | Microsoft Entra ID (app registration + managed identity) |
| Events / telemetry | in-memory list | Event Hubs (`portfolio-events`) + Application Insights |
| Hosting | local desktop / dev server | App Service (default), Container Apps, or Static Web Apps (`hosting` param) |

## Files

- `main.bicep`: resource group-scoped template (managed identity, Log Analytics, App Insights, Key Vault, Cosmos DB, Storage, Event Hubs, optional SQL, hosting).
- `main.parameters.json`: dev parameters. No secrets. Supply `sqlAdminPassword` at deploy time only.

## Turning it on later (not done yet)

1. Create an Entra ID app registration; put tenant/client IDs in `.env.local` (never commit real values; see `.env.example`).
2. Deploy: `az deployment group create -g <resource-group> -f infra/azure/main.bicep -p infra/azure/main.parameters.json`
3. Add the SDKs (`@azure/identity`, `@azure/cosmos`, `@azure/storage-blob`, `@azure/event-hubs`) and replace the stubs in `azure` with real calls.
4. Set `CLOUD_PROVIDER=azure`.

Nothing here has been deployed and no Azure login was performed.
