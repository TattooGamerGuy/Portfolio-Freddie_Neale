// Local provider: in-process store that wraps the app's existing mock/simulated data.
// Seed collections with existing mock data via createLocalProvider({ seed: { tasks: MOCK_TASKS } }).
// Existing data modules are untouched; this layer is opt-in and is the default (CLOUD_PROVIDER=local).
import type { AuthProvider, BlobStore, CloudDocument, CloudProvider, CloudUser, DocumentStore, EventPublisher } from "./types";

export interface LocalProviderOptions {
  seed?: Record<string, CloudDocument[]>;
  user?: CloudUser | null;
}

export const LOCAL_DEV_USER: CloudUser = { id: "local-dev", name: "Local Developer", roles: ["admin"] };

export function createLocalProvider(options: LocalProviderOptions = {}): CloudProvider {
  const collections = new Map<string, Map<string, CloudDocument>>();
  for (const [name, docs] of Object.entries(options.seed ?? {})) {
    collections.set(name, new Map(docs.map((d) => [d.id, structuredClone(d)])));
  }
  const col = (name: string) => {
    let c = collections.get(name);
    if (!c) { c = new Map(); collections.set(name, c); }
    return c;
  };
  const documents: DocumentStore = {
    async get<T extends CloudDocument>(collection: string, id: string) { return (col(collection).get(id) as T | undefined) ?? null; },
    async list<T extends CloudDocument>(collection: string) { return [...col(collection).values()] as T[]; },
    async put<T extends CloudDocument>(collection: string, doc: T) { col(collection).set(doc.id, structuredClone(doc)); return doc; },
    async remove(collection: string, id: string) { return col(collection).delete(id); },
  };
  const files = new Map<string, Uint8Array>();
  const blobs: BlobStore = {
    async put(key, data) {
      files.set(key, typeof data === "string" ? new TextEncoder().encode(data) : data);
      return { key, url: "local://blob/" + encodeURIComponent(key) };
    },
    async get(key) { return files.get(key) ?? null; },
    async remove(key) { return files.delete(key); },
  };
  const user = options.user === undefined ? LOCAL_DEV_USER : options.user;
  const auth: AuthProvider = { async getCurrentUser() { return user; } };
  const published: { topic: string; payload: unknown }[] = [];
  const events: EventPublisher & { published: typeof published } = {
    published,
    async publish(topic, payload) { published.push({ topic, payload }); },
  };
  return { name: "local", documents, blobs, auth, events };
}
