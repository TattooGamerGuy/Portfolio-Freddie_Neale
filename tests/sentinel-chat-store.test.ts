import { afterEach, describe, expect, it, vi } from "vitest";
import {
  SENTINEL_CHAT_OPEN_EVENT,
  openPortfolioSentinelChat,
  subscribePortfolioSentinelOpen,
} from "@/lib/sentinel-chat-store";

describe("sentinel chat store", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("dispatches the open event in the browser", () => {
    const spy = vi.spyOn(window, "dispatchEvent");
    openPortfolioSentinelChat();
    expect(spy).toHaveBeenCalledOnce();
    const event = spy.mock.calls[0]?.[0] as CustomEvent;
    expect(event.type).toBe(SENTINEL_CHAT_OPEN_EVENT);
  });

  it("subscribes and unsubscribes listeners", () => {
    const onOpen = vi.fn();
    const unsubscribe = subscribePortfolioSentinelOpen(onOpen);
    window.dispatchEvent(new CustomEvent(SENTINEL_CHAT_OPEN_EVENT));
    expect(onOpen).toHaveBeenCalledOnce();
    unsubscribe();
    window.dispatchEvent(new CustomEvent(SENTINEL_CHAT_OPEN_EVENT));
    expect(onOpen).toHaveBeenCalledOnce();
  });
});
