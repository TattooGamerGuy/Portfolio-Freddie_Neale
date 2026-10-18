import {
  academySiteUrl,
  devhubUrl,
  itchStudioUrl,
  lifeLongSiteUrl,
  nunnOpsRepoUrl,
  onlineAppUrl,
  pyforgeSiteUrl,
  zombieInvasionUrl,
} from "@/lib/site";
import type { ProjectEntry } from "@/lib/types";

export const projects: ProjectEntry[] = [
  {
    slug: "nunn-ops",
    title: "Nunn Ops",
    category: "ops",
    status: "prototype",
    summary:
      "Planning workspace for the proposed Nunn Applied Systems subsidiary under Nunn Corporation — registry, gaps, cadence, and presentations. Not a live product or corporate record.",
    stack: ["Next.js", "TypeScript", "Evidence-labeled data", "Browser storage"],
    href: nunnOpsRepoUrl,
    hrefLabel: "View on GitHub",
  },
  {
    slug: "algorithm-academy-website",
    title: "Algorithm Academy",
    category: "product",
    status: "prototype",
    summary:
      "Parent company hub — brand, products, studio teaser, and games portfolio for the Algorithm Academy ecosystem.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: academySiteUrl,
    hrefLabel: "Open site",
  },
  {
    slug: "algorithm-academy-online",
    title: "Algorithm Academy Online",
    category: "product",
    status: "prototype",
    summary:
      "Duolingo-style CS learning MVP with a skill path, lesson player, XP, streaks, and hearts — progress persisted locally.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Curriculum engine",
      "localStorage",
    ],
    href: onlineAppUrl,
    hrefLabel: "Open app",
  },
  {
    slug: "developer-hub",
    title: "Developer Hub",
    category: "product",
    status: "in-development",
    summary:
      "Creator suite under Algorithm Academy: Unity games marketplace MVP, with Signal Room and Boardforge on the roadmap.",
    stack: ["Next.js", "API routes", "File uploads", "TypeScript"],
    href: devhubUrl,
    hrefLabel: "Open hub",
  },
  {
    slug: "lifelong-studios",
    title: "LifeLong Studios",
    category: "product",
    status: "prototype",
    summary:
      "Game studio subsidiary site — studio story, titles portfolio, and bridge to the Pyforge engine.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: lifeLongSiteUrl,
    hrefLabel: "Open studio",
  },
  {
    slug: "pyforge",
    title: "Pyforge",
    category: "engine",
    status: "in-development",
    summary:
      "Marketing site for Pyforge — a pygame-based game engine and toolkit from LifeLong Studios.",
    stack: ["Next.js", "Pygame", "Product design"],
    href: pyforgeSiteUrl,
    hrefLabel: "Open Pyforge",
  },
  {
    slug: "zombie-invasion",
    title: "Zombie Invasion",
    category: "roblox",
    status: "in-development",
    summary:
      "Co-op round-based survival on Roblox — gear up in the Aether Hideout, extract to the Aether Foundry, and hold the line. Original IP-safe systems naming throughout.",
    stack: ["Roblox Studio", "Luau", "Aether Hideout", "Aether Foundry"],
    href: zombieInvasionUrl,
    hrefLabel: "Play on Roblox",
  },
  {
    slug: "frostline",
    title: "Frostline",
    category: "game",
    status: "prototype",
    summary:
      "2D side-scrolling survival aboard a train crossing a frozen world — gather, upgrade, and endure.",
    stack: ["Unity 6", "URP 2D", "New Input System"],
    href: "https://github.com/TattooGamerGuy/Frostline_Prototype",
    hrefLabel: "View on GitHub",
  },
  {
    slug: "veggie-vigilante",
    title: "Veggie Vigilante",
    category: "game",
    status: "prototype",
    summary:
      "Top-down arena roguelike where produce-powered combat meets wave-based survival.",
    stack: ["Unity 6", "2D", "Roguelike systems"],
    href: "https://github.com/TattooGamerGuy/Veggie-Vigilante",
    hrefLabel: "View on GitHub",
  },
  {
    slug: "shattered-realms",
    title: "Shattered Realms",
    category: "game",
    status: "prototype",
    summary:
      "Fantasy auto battler prototype exploring squad tactics and realm-hopping progression.",
    stack: ["Unity", "Auto battler", "Game design"],
    href: "https://github.com/TattooGamerGuy/Shattered-Realms",
    hrefLabel: "View on GitHub",
  },
  {
    slug: "puppet-master",
    title: "PuppetMaster",
    category: "game",
    status: "prototype",
    summary:
      "2D metroidvania with a textile aesthetic — explore, unlock abilities, and reclaim the stage.",
    stack: ["Unity", "Metroidvania", "2D"],
    href: "https://github.com/TattooGamerGuy/PuppetMaster",
    hrefLabel: "View on GitHub",
  },
  {
    slug: "outbreak-zero",
    title: "Outbreak Zero",
    category: "game",
    status: "prototype",
    summary:
      "Extraction-style prototype focused on tense runs, objectives, and getting out alive.",
    stack: ["Unity", "Extraction", "Systems design"],
    href: "https://github.com/TattooGamerGuy/Outbreak-Zero",
    hrefLabel: "View on GitHub",
  },
  {
    slug: "bounce-golf",
    title: "Bounce Golf",
    category: "jam",
    status: "released",
    summary:
      "ScoreSpace Jam #21 entry — Unity golf with bounce scoring. Overall #15 of 66.",
    stack: ["Unity", "Game jam", "itch.io"],
    href: "https://bloodshotstudios.itch.io/bounce-golf",
    hrefLabel: "Play on itch.io",
  },
  {
    slug: "orbs-descent",
    title: "Orbs Descent",
    category: "jam",
    status: "in-development",
    summary:
      "UDC Jam #23 Infinite Loop entry — top-down adventure with random portals. Overall #8 of 27.",
    stack: ["Unity", "Game jam", "itch.io"],
    href: "https://bloodshotstudios.itch.io/orbs-descent",
    hrefLabel: "Play on itch.io",
  },
  {
    slug: "itch-studio",
    title: "itch.io studio page",
    category: "jam",
    status: "live",
    summary:
      "Published jam and prototype games (historical Bloodshot Studios page on itch.io).",
    stack: ["itch.io", "Unity", "WebGL"],
    href: itchStudioUrl,
    hrefLabel: "Open itch studio",
  },
];

export function getProjectsByCategory(category: ProjectEntry["category"]) {
  return projects.filter((project) => project.category === category);
}
