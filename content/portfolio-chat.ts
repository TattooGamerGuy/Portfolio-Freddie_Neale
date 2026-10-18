import {
  githubUrl,
  linkedInUrl,
  nunnOpsRepoUrl,
  zombieInvasionUrl,
} from "@/lib/site";
import type { ChatLink, ChatTopic } from "@/lib/types";

export const portfolioChatAssistantLabel =
  "Simulated assistant. No AI model is called.";

export const portfolioChatGreeting = [
  "I am Sentinel Governed AI — your portfolio guide for Freddie Neale.",
  "Ask about his role as COO at Nunn Corporation, Algorithm Academy, LifeLong Studios, Zombie Invasion, education, game jams, or how to navigate this site.",
  portfolioChatAssistantLabel,
  "This is a scripted offline guide, not a company record or a production control plane.",
].join(" ");

export const defaultSuggestions = [
  "What is Freddie's current role?",
  "Tell me about Nunn Corporation",
  "What is Zombie Invasion?",
  "Show game jams",
];

export const fallbackLinks: ChatLink[] = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const chatTopics: ChatTopic[] = [
  {
    id: "who",
    keywords: [
      "who is freddie",
      "about freddie",
      "who are you",
      "introduce",
      "bio",
      "about me",
    ],
    reply:
      "Freddie Neale is COO at Nunn Corporation and founder of Algorithm Academy. He builds full-stack learning products, Unity prototypes, and Roblox experiences through LifeLong Studios.",
    links: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
    ],
    suggestion: "Who is Freddie?",
  },
  {
    id: "role",
    keywords: [
      "current role",
      "job title",
      "coo",
      "chief operating",
      "what does he do",
      "title",
      "headline",
    ],
    reply:
      "Current title: COO, Nunn Corporation. Secondary: Founder of Algorithm Academy — full-stack, Unity, and Roblox. On Nunn work he runs the planning workspace; executive, legal, and financial decisions stay with the CEO.",
    links: [
      { href: "#experience", label: "Experience" },
      { href: nunnOpsRepoUrl, label: "Nunn Ops on GitHub" },
    ],
    suggestion: "What is Freddie's current role?",
  },
  {
    id: "nunn",
    keywords: [
      "nunn",
      "nunn corporation",
      "nunn ops",
      "nunn applied",
      "acting coo",
      "planning workspace",
    ],
    reply:
      "Nunn Corporation is the parent context for Nunn Ops, a planning workspace Freddie operates as COO. Nunn Applied Systems is a proposed subsidiary — not formed and not a live product. The workspace is evidence-labeled and is not an authoritative corporate filing.",
    links: [
      { href: "#experience", label: "Experience" },
      { href: nunnOpsRepoUrl, label: "Nunn Ops repo" },
      { href: "#work", label: "Work" },
    ],
    suggestion: "Tell me about Nunn Corporation",
  },
  {
    id: "sentinel",
    keywords: [
      "sentinel",
      "sentinel governed",
      "sentinel ai",
      "sentinelos",
      "governed ai",
      "this chat",
      "are you ai",
    ],
    reply:
      "Sentinel Governed AI is Cody Nunn's governed command-execution product (documented upstream code, not a certification). This chatbox is a portfolio guide that reuses the scripted Sentinel assistant pattern from Nunn Ops. Simulated assistant — no AI model is called, and nothing here controls production SentinelOS.",
    links: [
      { href: "#work", label: "Work" },
      { href: nunnOpsRepoUrl, label: "Nunn Ops" },
    ],
    suggestion: "What is Sentinel on this site?",
  },
  {
    id: "algorithm-academy",
    keywords: [
      "algorithm academy",
      "academy",
      "learning",
      "duolingo",
      "online",
      "developer hub",
      "dev hub",
    ],
    reply:
      "Algorithm Academy is Freddie's parent product house: marketing hub, Online learning MVP (XP, streaks, hearts), Developer Hub creator suite, LifeLong Studios, and Pyforge. Open the Work section for each surface.",
    links: [
      { href: "#work", label: "Work" },
      { href: "#about", label: "About" },
    ],
    suggestion: "What is Algorithm Academy?",
  },
  {
    id: "lifelong",
    keywords: [
      "lifelong",
      "life long",
      "studios",
      "bloodshot",
      "game studio",
      "pyforge",
    ],
    reply:
      "LifeLong Studios is the Algorithm Academy game subsidiary (the current public brand — older itch pages may still say Bloodshot Studios). It covers Unity titles, Roblox experiences, and the Pyforge pygame engine surface.",
    links: [
      { href: "#work", label: "Work" },
      { href: "https://bloodshotstudios.itch.io", label: "itch.io studio" },
    ],
    suggestion: "What is LifeLong Studios?",
  },
  {
    id: "zombie-invasion",
    keywords: [
      "zombie",
      "zombie invasion",
      "roblox",
      "aether",
      "hideout",
      "foundry",
      "placeid",
    ],
    reply:
      "Zombie Invasion is a co-op round-based Roblox survival experience from LifeLong Studios. Loop: gear up in the Aether Hideout, extract to the Aether Foundry, hold the line. Systems use original IP-safe names (Vital Siphon, Aether Crate, Forge Station, and related terms).",
    links: [
      { href: zombieInvasionUrl, label: "Play on Roblox" },
      { href: "#work", label: "Work" },
    ],
    suggestion: "What is Zombie Invasion?",
  },
  {
    id: "jams",
    keywords: [
      "game jam",
      "jams",
      "itch",
      "bounce golf",
      "orbs descent",
      "scorespace",
      "udc jam",
    ],
    reply:
      "Two published jam games: Bounce Golf (ScoreSpace Jam #21 — overall #15 of 66) and Orbs Descent (UDC Jam #23 Infinite Loop — overall #8 of 27). Both are on the Bloodshot Studios itch.io page.",
    links: [
      { href: "#work", label: "Work / jams" },
      { href: "https://bloodshotstudios.itch.io/bounce-golf", label: "Bounce Golf" },
      { href: "https://bloodshotstudios.itch.io/orbs-descent", label: "Orbs Descent" },
    ],
    suggestion: "Show game jams",
  },
  {
    id: "education",
    keywords: [
      "education",
      "degree",
      "school",
      "full sail",
      "bachelor",
      "gpa",
      "university",
    ],
    reply:
      "Freddie is pursuing / listing a B.S. in Web Development at Full Sail University with a self-stated 4.0 GPA. Coursework highlights include Interactive Media Design, Advanced JavaScript, Full Stack Web Development, and Database Structures.",
    links: [
      { href: "#education", label: "Education" },
      {
        href: "https://github.com/TattooGamerGuy/Full-Sail-University",
        label: "Full Sail repo",
      },
    ],
    suggestion: "Where did Freddie study?",
  },
  {
    id: "certs",
    keywords: [
      "certification",
      "certificate",
      "linkedin learning",
      "personal brand",
      "interpersonal",
    ],
    reply:
      "LinkedIn Learning certificates include Creating Your Personal Brand (Lida Citroën) and Interpersonal Communication (2020) by Dorie Clark.",
    links: [{ href: "#education", label: "Education & certs" }],
    suggestion: "Any certifications?",
  },
  {
    id: "skills",
    keywords: [
      "skills",
      "stack",
      "typescript",
      "next.js",
      "unity",
      "luau",
      "tech",
    ],
    reply:
      "Core craft: Next.js / React / TypeScript, Unity 6, Roblox Luau, plus COO planning skills (cadence, evidence labels, gap registers). See the Skills section for the full grouped list.",
    links: [{ href: "#skills", label: "Skills" }],
    suggestion: "What are his skills?",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "hire",
      "reach",
      "linkedin",
      "github",
      "collaborate",
    ],
    reply:
      "Use the Contact section for email, GitHub, and LinkedIn. Open to collaboration on web products, learning experiences, and game prototypes.",
    links: [
      { href: "#contact", label: "Contact" },
      { href: githubUrl, label: "GitHub" },
      { href: linkedInUrl, label: "LinkedIn" },
    ],
    suggestion: "How do I contact Freddie?",
  },
  {
    id: "navigate",
    keywords: [
      "navigate",
      "sections",
      "how to use",
      "tour",
      "help",
      "where",
      "menu",
    ],
    reply:
      "This is a single-page portfolio. Jump with the nav or ask me: Experience, Work (products, games, Roblox, jams, Nunn Ops), Education & certifications, Skills, About, Contact. I reply with links you can click.",
    links: fallbackLinks,
    suggestion: "How do I navigate this site?",
  },
  {
    id: "unity",
    keywords: [
      "unity",
      "frostline",
      "veggie",
      "puppet",
      "outbreak",
      "shattered",
      "prototype games",
    ],
    reply:
      "Unity prototypes include Frostline, Veggie Vigilante, Shattered Realms, PuppetMaster, and Outbreak Zero — plus jam titles Bounce Golf and Orbs Descent. Some GitHub repos may be private; itch links stay public.",
    links: [{ href: "#work", label: "Work" }],
    suggestion: "Show Unity games",
  },
];
