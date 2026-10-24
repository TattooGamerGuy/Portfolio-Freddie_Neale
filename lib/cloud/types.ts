// Cloud provider abstraction for Freddie Neale Portfolio.
// Default provider is "local" (existing mock/simulated data). "azure" is stubbed until real credentials exist.
export type CloudProviderName = "local" | "azure";

export interface CloudDocument { id: string; [key: string]: unknown }

/** Document/record storage. Azure target: Cosmos DB (NoSQL API) or Azure SQL. */
export interface DocumentStore {
  get<T extends CloudDocument>(collection: string, id: string): Promise<T | null>;
  list<T extends CloudDocument>(collection: string): Promise<T[]>;
  put<T extends CloudDocument>(collection: string, doc: T): Promise<T>;
  remove(collection: string, id: string): Promise<boolean>;
}

/** File/object storage. Azure target: Blob Storage. */
export interface BlobStore {
  put(key: string, data: Uint8Array | string, contentType?: string): Promise<{ key: string; url: string }>;
  get(key: string): Promise<Uint8Array | null>;
  remove(key: string): Promise<boolean>;
}

export interface CloudUser { id: string; name: string; email?: string; roles: string[] }

/** Identity. Azure target: Microsoft Entra ID. */
export interface AuthProvider {
  getCurrentUser(): Promise<CloudUser | null>;
}

/** Event/telemetry stream. Azure target: Event Hubs. */
export interface EventPublisher {
  publish(topic: string, payload: unknown): Promise<void>;
}

export interface CloudProvider {
  readonly name: CloudProviderName;
  readonly documents: DocumentStore;
  readonly blobs: BlobStore;
  readonly auth: AuthProvider;
  readonly events: EventPublisher;
}
