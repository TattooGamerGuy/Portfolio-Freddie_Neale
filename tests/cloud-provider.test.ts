import { describe, expect, it } from "vitest";
import { createLocalProvider, getCloudProvider, resolveProviderName } from "../lib/cloud";

const expectReject = (p: Promise<unknown>) => expect(p).rejects.toThrow(/not configured/);

describe("cloud provider", () => {
  it("defaults to local when CLOUD_PROVIDER is unset", () => {
    expect(resolveProviderName({})).toBe("local");
    expect(getCloudProvider({}).name).toBe("local");
  });
  it("stays local for unknown values and only switches on azure", () => {
    expect(resolveProviderName({ CLOUD_PROVIDER: "aws" })).toBe("local");
    expect(resolveProviderName({ CLOUD_PROVIDER: "Azure" })).toBe("azure");
  });
  it("local provider serves seeded mock data", async () => {
    const p = createLocalProvider({ seed: { items: [{ id: "1", title: "mock" }] } });
    expect(await p.documents.get("items", "1")).toEqual({ id: "1", title: "mock" });
    expect((await p.auth.getCurrentUser())?.id).toBe("local-dev");
  });
  it("azure stubs throw until configured", async () => {
    await expectReject(getCloudProvider({ CLOUD_PROVIDER: "azure" }).documents.list("items"));
  });
});
