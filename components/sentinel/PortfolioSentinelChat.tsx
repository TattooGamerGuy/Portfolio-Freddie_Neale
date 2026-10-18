"use client";

import { MessageCircleIcon, SendHorizontalIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { portfolioChatAssistantLabel } from "@/content/portfolio-chat";
import {
  buildReply,
  greetingReply,
  type ChatReply,
} from "@/lib/portfolio-chat";
import { subscribePortfolioSentinelOpen } from "@/lib/sentinel-chat-store";
import { cn } from "@/lib/utils";

type Turn = {
  id: string;
  from: "assistant" | "visitor";
  text: string;
  links?: ChatReply["links"];
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  );
}

function Bubble({ turn }: { turn: Turn }) {
  const assistant = turn.from === "assistant";
  return (
    <li
      className={cn(
        "flex flex-col gap-1.5",
        assistant ? "items-start" : "items-end",
      )}
    >
      <p
        className={cn(
          "max-w-[92%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-6",
          assistant
            ? "rounded-bl-sm bg-muted text-foreground"
            : "rounded-br-sm bg-primary text-primary-foreground",
        )}
      >
        <span className="sr-only">
          {assistant ? "Sentinel Governed AI: " : "You: "}
        </span>
        {turn.text}
      </p>
      {turn.links && turn.links.length > 0 ? (
        <ul className="flex max-w-[92%] flex-wrap gap-1.5">
          {turn.links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              {isExternalHref(link.href) ? (
                <Button asChild variant="outline" size="sm" className="h-7 text-xs">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </Button>
              ) : (
                <Button asChild variant="outline" size="sm" className="h-7 text-xs">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Floating Sentinel Governed AI portfolio guide — scripted, offline assistant.
 */
export function PortfolioSentinelChat() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const logRef = useRef<HTMLOListElement>(null);
  const [draft, setDraft] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const greeted = useRef(false);

  function seedGreeting() {
    if (greeted.current) return;
    const greeting = greetingReply();
    setTurns([
      {
        id: makeId(),
        from: "assistant",
        text: greeting.text,
        links: greeting.links,
      },
    ]);
    setSuggestions(greeting.suggestions);
    greeted.current = true;
  }

  function setPanelOpen(next: boolean) {
    setOpen(next);
    if (next) seedGreeting();
  }

  useEffect(() => {
    return subscribePortfolioSentinelOpen(() => {
      setOpen(true);
      seedGreeting();
    });
  }, []);

  useEffect(() => {
    logRef.current?.lastElementChild?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [turns]);

  function applyReply(reply: ChatReply) {
    setTurns((prev) => [
      ...prev,
      {
        id: makeId(),
        from: "assistant",
        text: reply.text,
        links: reply.links,
      },
    ]);
    setSuggestions(reply.suggestions);
  }

  function ask(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setTurns((prev) => [
      ...prev,
      { id: makeId(), from: "visitor", text: clean },
    ]);
    setDraft("");
    applyReply(buildReply(clean));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(draft);
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[200] flex justify-end p-3 sm:p-4"
      data-sentinel-overlay="portfolio"
    >
      {open ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="pointer-events-auto flex max-h-[min(36rem,calc(100dvh-5rem))] w-[min(100%,22rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-[24rem]"
        >
          <header className="flex shrink-0 items-start gap-3 border-b border-border bg-muted/40 px-3 py-2.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <MessageCircleIcon className="size-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <h2
                id={titleId}
                className="truncate font-display text-sm font-semibold tracking-tight"
              >
                Sentinel Governed AI
              </h2>
              <p className="text-xs text-muted-foreground">Portfolio guide</p>
              <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                {portfolioChatAssistantLabel}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 shrink-0"
              aria-label="Close Sentinel portfolio guide"
              onClick={() => setPanelOpen(false)}
            >
              <XIcon className="size-4" />
            </Button>
          </header>

          <ScrollArea className="min-h-0 flex-1">
            <ol
              ref={logRef}
              role="log"
              aria-live="polite"
              aria-label="Conversation with Sentinel portfolio guide"
              className="flex flex-col gap-2.5 px-3 py-3"
            >
              {turns.map((turn) => (
                <Bubble key={turn.id} turn={turn} />
              ))}
            </ol>
          </ScrollArea>

          {suggestions.length > 0 ? (
            <div
              role="group"
              aria-label="Suggested questions"
              className="flex shrink-0 flex-wrap gap-1.5 border-t border-border px-3 py-2"
            >
              {suggestions.map((chip) => (
                <Button
                  key={chip}
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => ask(chip)}
                >
                  {chip}
                </Button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={onSubmit}
            className="flex shrink-0 items-center gap-2 border-t border-border px-3 py-2.5"
          >
            <Input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about role, work, education…"
              aria-label="Message to Sentinel portfolio guide"
              className="h-9"
              autoComplete="off"
            />
            <Button
              type="submit"
              size="icon"
              className="size-9 shrink-0"
              aria-label="Send message"
              disabled={!draft.trim()}
            >
              <SendHorizontalIcon className="size-4" />
            </Button>
          </form>
        </section>
      ) : (
        <Button
          type="button"
          size="icon"
          className="pointer-events-auto size-14 rounded-full shadow-lg"
          aria-label="Open Sentinel portfolio guide"
          onClick={() => setPanelOpen(true)}
        >
          <MessageCircleIcon className="size-6" />
        </Button>
      )}
    </div>
  );
}
