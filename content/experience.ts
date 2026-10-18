import { academySiteUrl, nunnOpsRepoUrl } from "@/lib/site";
import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "coo-nunn",
    title: "COO",
    organization: "Nunn Corporation",
    period: "Present",
    current: true,
    summary:
      "COO of Nunn Corporation and co-founder & lead developer of proposed Nunn Applied Systems. Runs the Nunn Ops planning workspace end to end: development operations, corporate infrastructure design and operation, operating cadence, ecosystem registry, gap register, and roadmap. Recommends and implements; executive, legal, and financial decisions stay with the CEO.",
    highlights: [
      "Co-founder & lead developer of proposed Nunn Applied Systems — builds and ships the Nunn Ops codebase and planning surfaces the subsidiary would run on",
      "Development operations — own cross-workstream delivery, engineering sequencing within CEO priorities, and blocked-work triage within one business day",
      "Corporate infrastructure — design and run the proposed subsidiary operating system: organization model, procedures, compliance calendar, document control, governance specimens, and COO onboarding path",
      "Executive operations — run daily, weekly, monthly, and quarterly forums; keep the decision log and delegation matrix current; prepare the weekly CEO decision review with a recommendation per item",
      "Portfolio and registry — own the ecosystem registry and evidence labels; run monthly spot checks and quarterly refresh; no unsourced status upgrades",
      "People and talent — write role scorecards and hiring sequence for CEO approval; run structured interviews with weighted recommendations; own onboarding legal-packet readiness",
      "Cadence and measures — Friday operating scorecard; Monday portfolio priorities (≤3); monthly operating review; quarterly strategy review with the CEO",
      "Public-safe language — every claim sourced or labeled; planning workspace only; never sign, approve, or appoint outside written authority",
    ],
    href: nunnOpsRepoUrl,
    hrefLabel: "View Nunn Ops on GitHub",
  },
  {
    id: "founder-aa",
    title: "Founder",
    organization: "Algorithm Academy",
    period: "Present",
    current: true,
    summary:
      "Founder of Algorithm Academy — the parent software company and multi-brand monorepo. As sole founder, operates CEO and COO duties together: sets strategy and runs day-to-day development operations across the company hub, Online learning app, Developer Hub, LifeLong Studios, Pyforge, and founder portfolio. Ships product, studio, and engine surfaces under one founder-operated stack.",
    highlights: [
      "CEO duties — set brand hierarchy and product direction for Algorithm Academy as parent, with LifeLong Studios as the game subsidiary and Pyforge as the in-house pygame engine path",
      "COO / development operations — own build, ship, and cross-app delivery for the full Next.js ecosystem (ports 3000–3005): company hub, Online, Dev Hub, LifeLong, Pyforge, and portfolio",
      "Learning product — design and ship Algorithm Academy Online (Duolingo-style CS fundamentals MVP: XP, streaks, hearts, browser-local progress)",
      "Creator suite — run Developer Hub (Unity marketplace MVP; roadmap apps Signal Room and Boardforge) and multi-brand design systems",
      "LifeLong Studios — lead Unity 6 prototypes and Roblox experiences, including Zombie Invasion (Aether Hideout → Aether Foundry) with IP-safe player-facing names",
      "Studio governance — approve marketing go-live gates; keep unpublished Zombie Invasion marketing until the game is capture-ready",
      "Architecture — maintain typed content modules, env-linked multi-app topology, and public-safe brand rules (LifeLong Studios, not Bloodshot, for current copy)",
    ],
    href: academySiteUrl,
    hrefLabel: "Open Algorithm Academy",
  },
];
