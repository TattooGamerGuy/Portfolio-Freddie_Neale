/**
 * Pure matchers and reply builders for the portfolio Sentinel guide.
 * Deterministic, offline — no network and no model.
 */

import {
  chatTopics,
  defaultSuggestions,
  fallbackLinks,
  portfolioChatGreeting,
} from "@/content/portfolio-chat";
import type { ChatLink, ChatTopic } from "@/lib/types";

export type ChatReply = {
  kind: "topic" | "fallback" | "refusal";
  text: string;
  links: ChatLink[];
  topicId?: string;
  suggestions: string[];
};

const REFUSAL_PATTERNS: { re: RegExp; reason: string }[] = [
  {
    re: /\bsk_live_[a-z0-9]+|\brk_live_[a-z0-9]+|\bsk_test_[a-z0-9]{8,}|\b(api[_-]?key|password|secret)\b/i,
    reason: "I will not handle secrets or live keys.",
  },
  {
    re: /\b(live\s+(tenant|control|production)|real\s+customer|production\s+sentinel)\b/i,
    reason: "I cannot control live tenants or production SentinelOS.",
  },
  {
    re: /\b(ratify|ratification|appoint\s+officer|sign\s+the\s+(charter|resolution)|board\s+resolution)\b/i,
    reason: "I cannot ratify governance or appoint officers.",
  },
  {
    re: /\b(weapon|explosive|classified|nuclear\s+weapon)\b/i,
    reason: "That request is outside this portfolio guide.",
  },
  {
    re: /\b(hack|phish|exploit|ransomware)\b/i,
    reason: "I will not help with unauthorized access or crime.",
  },
];

const STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "are",
  "was",
  "were",
  "not",
  "any",
  "all",
  "one",
  "his",
  "her",
  "you",
  "your",
  "has",
  "have",
  "about",
  "what",
  "where",
  "when",
  "how",
  "tell",
  "show",
  "me",
]);

function normalize(input: string) {
  return input.toLowerCase().replace(/\s+/g, " ").trim();
}

function keywordHits(text: string, key: string): number {
  if (!key || STOPWORDS.has(key)) return 0;
  if (!key.includes(" ") && key.length < 4) {
    return text === key ? 8 : 0;
  }
  if (text === key) return 8;
  if (text.includes(key)) return key.length >= 8 ? 5 : 3;
  const parts = key
    .split(/\s+/)
    .filter((part) => part.length >= 4 && !STOPWORDS.has(part));
  if (parts.length > 1 && parts.every((part) => text.includes(part))) return 4;
  return 0;
}

export function scoreTopic(topic: ChatTopic, input: string): number {
  const text = normalize(input);
  if (!text) return 0;
  let score = 0;
  for (const keyword of topic.keywords) {
    score += keywordHits(text, keyword.toLowerCase());
  }
  return score;
}

export function matchTopic(input: string): ChatTopic | null {
  let best: ChatTopic | null = null;
  let bestScore = 0;
  for (const topic of chatTopics) {
    const score = scoreTopic(topic, input);
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  return bestScore >= 5 ? best : null;
}

export function isRefusal(input: string): string | null {
  const text = input.trim();
  if (!text) return null;
  for (const entry of REFUSAL_PATTERNS) {
    if (entry.re.test(text)) return entry.reason;
  }
  return null;
}

export function suggestChips(limit = 4): string[] {
  const fromTopics = chatTopics
    .filter((topic) => topic.suggestion)
    .map((topic) => topic.suggestion!);
  const chips: string[] = [];
  for (const chip of [...defaultSuggestions, ...fromTopics]) {
    if (!chips.includes(chip)) chips.push(chip);
    if (chips.length >= limit) break;
  }
  return chips;
}

export function fallbackHelp(): ChatReply {
  return {
    kind: "fallback",
    text: [
      "I did not find an exact topic for that.",
      "Try asking about Freddie's COO role, Nunn Ops, Algorithm Academy, LifeLong Studios, Zombie Invasion, education, certifications, skills, Unity games, or game jams.",
      "Or use the section links below.",
    ].join(" "),
    links: fallbackLinks,
    suggestions: suggestChips(),
  };
}

export function buildReply(input: string): ChatReply {
  const clean = input.trim();
  if (!clean) {
    return {
      kind: "fallback",
      text: "Ask about Freddie's role, Nunn Corporation, Algorithm Academy, projects, education, or how to navigate this portfolio.",
      links: fallbackLinks,
      suggestions: suggestChips(),
    };
  }

  const refusal = isRefusal(clean);
  if (refusal) {
    return {
      kind: "refusal",
      text: `${refusal} I stay inside this portfolio guide: navigate sections and explain public work only.`,
      links: fallbackLinks,
      suggestions: suggestChips(),
    };
  }

  const topic = matchTopic(clean);
  if (!topic) return fallbackHelp();

  return {
    kind: "topic",
    text: topic.reply,
    links: topic.links,
    topicId: topic.id,
    suggestions: suggestChips(),
  };
}

export function greetingReply(): ChatReply {
  return {
    kind: "topic",
    text: portfolioChatGreeting,
    links: fallbackLinks,
    topicId: "greeting",
    suggestions: suggestChips(),
  };
}
