import { nunnOpsRepoUrl } from "@/lib/site";
import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "coo-nunn",
    title: "COO",
    organization: "Nunn Corporation",
    period: "Present",
    current: true,
    summary:
      "Runs the Nunn Ops planning workspace — ecosystem registry, gap register, operating cadence, and roadmap. Recommends and implements; executive, legal, and financial decisions stay with the CEO. Nunn Applied Systems is a proposed subsidiary, not a formed entity or live product.",
    highlights: [
      "Built and maintains the Nunn Ops planning workspace (browser-local, evidence-labeled)",
      "Guides registry, gaps, workflow, and presentation surfaces for the COO seat",
      "Keeps public language honest: planning workspace, not an authoritative corporate record",
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
      "Parent house for learning products, creator tools, and LifeLong Studios games — spanning Next.js apps, Unity prototypes, and Roblox experiences including Zombie Invasion.",
    highlights: [
      "Ships multi-brand Next.js products: Academy hub, Online learning MVP, Developer Hub, LifeLong Studios, Pyforge",
      "Leads Unity 6 and Roblox (Luau) gameplay prototyping under LifeLong Studios",
      "Connects education, studio, and engine surfaces under one founder-operated stack",
    ],
  },
];
