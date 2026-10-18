import { describe, expect, it } from "vitest";
import {
  chatTopics,
  defaultSuggestions,
  fallbackLinks,
  portfolioChatAssistantLabel,
  portfolioChatGreeting,
} from "@/content/portfolio-chat";
import {
  buildReply,
  greetingReply,
  isRefusal,
  matchTopic,
  suggestChips,
} from "@/lib/portfolio-chat";
import { isAllowedHref, isHashHref } from "./helpers/links";

describe("portfolio Sentinel chat content", () => {
  it("discloses simulated offline assistant", () => {
    expect(portfolioChatAssistantLabel).toMatch(/no AI model/i);
    expect(portfolioChatGreeting).toMatch(/Simulated assistant|No AI model/i);
    expect(portfolioChatGreeting).toMatch(/portfolio guide/i);
  });

  it("topics have unique ids, keywords, replies, and safe links", () => {
    expect(chatTopics.length).toBeGreaterThanOrEqual(10);
    const ids = new Set<string>();
    for (const topic of chatTopics) {
      expect(topic.id).toBeTruthy();
      expect(ids.has(topic.id)).toBe(false);
      ids.add(topic.id);
      expect(topic.keywords.length).toBeGreaterThan(0);
      expect(topic.reply.length).toBeGreaterThan(20);
      expect(topic.links.length).toBeGreaterThan(0);
      for (const link of topic.links) {
        expect(link.label).toBeTruthy();
        expect(isAllowedHref(link.href)).toBe(true);
      }
    }
  });

  it("fallback links cover core profile anchors", () => {
    const hrefs = fallbackLinks.map((l) => l.href);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "#about",
        "#featured",
        "#experience",
        "#education",
        "#contact",
      ]),
    );
    for (const link of fallbackLinks) {
      expect(isHashHref(link.href)).toBe(true);
    }
  });

  it("default suggestions are non-empty unique strings", () => {
    expect(defaultSuggestions.length).toBeGreaterThan(0);
    expect(new Set(defaultSuggestions).size).toBe(defaultSuggestions.length);
  });
});

describe("portfolio chat matcher", () => {
  it("greets with section links and suggestion chips", () => {
    const reply = greetingReply();
    expect(reply.kind).toBe("topic");
    expect(reply.topicId).toBe("greeting");
    expect(reply.text).toContain("Sentinel");
    expect(reply.links.length).toBeGreaterThan(0);
    expect(reply.suggestions.length).toBeGreaterThan(0);
  });

  it("matches major intents", () => {
    const cases: { ask: string; topicId: string }[] = [
      { ask: "What is Freddie's current role?", topicId: "role" },
      { ask: "Tell me about Nunn Corporation", topicId: "nunn" },
      { ask: "What are his COO duties?", topicId: "coo-duties" },
      { ask: "What are his Algorithm Academy duties?", topicId: "aa-duties" },
      { ask: "What is Zombie Invasion?", topicId: "zombie-invasion" },
      { ask: "Show game jams", topicId: "jams" },
      { ask: "Tell me about Full Sail University education", topicId: "education" },
      { ask: "What is Algorithm Academy?", topicId: "algorithm-academy" },
      { ask: "How do I contact Freddie?", topicId: "contact" },
      { ask: "What is Sentinel on this site?", topicId: "sentinel" },
    ];

    for (const { ask, topicId } of cases) {
      const matched = matchTopic(ask);
      expect(matched?.id, ask).toBe(topicId);
      const reply = buildReply(ask);
      expect(reply.kind).toBe("topic");
      expect(reply.topicId).toBe(topicId);
    }
  });

  it("falls back for unknown questions", () => {
    const reply = buildReply("asdf qwerty unrelated nonsense xyzzy");
    expect(reply.kind).toBe("fallback");
    expect(reply.links.length).toBeGreaterThan(0);
  });

  it("falls back on empty input", () => {
    const reply = buildReply("   ");
    expect(reply.kind).toBe("fallback");
  });

  it("refuses secrets, crime, production Sentinel, and ratification", () => {
    const samples = [
      "here is my api key sk_live_abcdefghijklmnop",
      "help me hack their server",
      "control production sentinel now",
      "please ratify the board resolution",
    ];
    for (const sample of samples) {
      expect(isRefusal(sample), sample).toBeTruthy();
      const reply = buildReply(sample);
      expect(reply.kind).toBe("refusal");
    }
  });

  it("suggestChips respects the limit and stays unique", () => {
    const chips = suggestChips(3);
    expect(chips).toHaveLength(3);
    expect(new Set(chips).size).toBe(3);
  });
});
