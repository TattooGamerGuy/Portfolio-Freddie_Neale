/** Browser session signal so hero CTAs can open the portfolio Sentinel panel. */

export const SENTINEL_CHAT_OPEN_EVENT = "fn-portfolio-sentinel-chat-open";

export function openPortfolioSentinelChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SENTINEL_CHAT_OPEN_EVENT));
}

export function subscribePortfolioSentinelOpen(onOpen: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onOpen();
  window.addEventListener(SENTINEL_CHAT_OPEN_EVENT, handler);
  return () => window.removeEventListener(SENTINEL_CHAT_OPEN_EVENT, handler);
}
