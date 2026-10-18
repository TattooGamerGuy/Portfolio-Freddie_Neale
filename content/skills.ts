import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "ops",
    title: "Operations & planning",
    skills: [
      "COO operating cadence",
      "Evidence-labeled initiative registries",
      "Gap registers and roadmap writing",
      "Public-safe claim language",
      "Planning workspace product design",
    ],
  },
  {
    id: "web",
    title: "Frontend & full-stack web",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "API routes",
      "Client persistence (localStorage)",
      "Multi-brand design systems",
    ],
  },
  {
    id: "game",
    title: "Unity game development",
    skills: [
      "Unity 6",
      "URP 2D",
      "New Input System",
      "2D gameplay systems",
      "Prototype iteration",
      "Game jam delivery",
      "Genre design (survival, roguelike, metroidvania, extraction, auto battler)",
    ],
  },
  {
    id: "roblox",
    title: "Roblox development",
    skills: [
      "Roblox Studio",
      "Luau scripting",
      "Client / server architecture",
      "Experience & place design",
      "Aether Hideout / Aether Foundry loop design",
      "Multiplayer-ready experience patterns",
    ],
  },
  {
    id: "product",
    title: "Product & systems",
    skills: [
      "Multi-app product architecture",
      "Learning product UX (XP, streaks, hearts)",
      "Curriculum / exercise engines",
      "Creator marketplace flows",
      "Information architecture",
    ],
  },
  {
    id: "tooling",
    title: "Tooling & craft",
    skills: [
      "Git / GitHub",
      "npm / Node.js tooling",
      "Technical documentation",
      "File-based prototype backends",
      "Pygame engine product direction (Pyforge)",
    ],
  },
];
