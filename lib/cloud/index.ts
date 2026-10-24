// Entry point: getCloudProvider() returns the local mock provider unless CLOUD_PROVIDER=azure.
import { createAzureProvider } from "./azure";
import { createLocalProvider } from "./local";
import type { CloudProvider, CloudProviderName } from "./types";

export * from "./types";
export { createLocalProvider, LOCAL_DEV_USER } from "./local";
export { createAzureProvider, readAzureConfig, AzureNotConfiguredError } from "./azure";

export function resolveProviderName(env: Record<string, string | undefined> = process.env): CloudProviderName {
  return (env.CLOUD_PROVIDER ?? "").trim().toLowerCase() === "azure" ? "azure" : "local";
}

let cached: CloudProvider | undefined;

export function getCloudProvider(env: Record<string, string | undefined> = process.env): CloudProvider {
  if (env !== process.env) return resolveProviderName(env) === "azure" ? createAzureProvider() : createLocalProvider();
  if (!cached) cached = resolveProviderName(env) === "azure" ? createAzureProvider() : createLocalProvider();
  return cached;
}
