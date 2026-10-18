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
  "Ask about his COO duties at Nunn Corporation (development operations and corporate infrastructure), Algorithm Academy, LifeLong Studios, Zombie Invasion, education, game jams, or how to navigate this site.",
  portfolioChatAssistantLabel,
  "This is a scripted offline guide, not a company record or a production control plane.",
].join(" ");

export const defaultSuggestions = [
  "What is Freddie's current role?",
  "What are his COO duties?",
  "What are his Algorithm Academy duties?",
  "Tell me about Nunn Corporation",
];

export const fallbackLinks: ChatLink[] = [
  { href: "#about", label: "About" },
  { href: "#featured", label: "Featured" },
  { href: "#experience", label: "Experience" },
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
      "Freddie Neale is COO at Nunn Corporation — that seat includes co-founder and lead-developer work on proposed Nunn Applied Systems — and founder of Algorithm Academy, where he covers CEO and COO duties as sole operator. He runs Nunn Ops development operations and corporate infrastructure, and ships Algorithm Academy's full product house plus LifeLong Studios games.",
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
      "Current titles: COO, Nunn Corporation (includes co-founder & lead developer of proposed Nunn Applied Systems — not a separate listing); Founder of Algorithm Academy (sole operator covering CEO and COO duties). On Nunn work, executive/legal/financial decisions stay with Nunn's CEO.",
    links: [
      { href: "#experience", label: "Experience" },
      { href: nunnOpsRepoUrl, label: "Nunn Ops on GitHub" },
    ],
    suggestion: "What is Freddie's current role?",
  },
  {
    id: "coo-duties",
    keywords: [
      "coo duties",
      "duties",
      "responsibilities",
      "what does the coo",
      "development operations",
      "corporate infrastructure",
      "operating cadence",
      "delegation",
      "scorecard",
      "what does he do as coo",
    ],
    reply:
      "Under one COO seat at Nunn (including co-founder & lead developer of proposed Nunn Applied Systems) he runs development operations and corporate infrastructure. Charter workstreams: (1) executive operations — cadence forums, decision log, weekly CEO review packets; (2) portfolio and registry — evidence labels, spot checks, keep/change/stop; (3) people — role scorecards, hiring recommendations, onboarding packets; plus subsidiary procedures, compliance calendar, and document control. He recommends and implements; strategy, budget, entities, contracts/IP, public claims, and officer appointments stay with Nunn's CEO.",
    links: [
      { href: "#experience", label: "Experience" },
      { href: nunnOpsRepoUrl, label: "Nunn Ops on GitHub" },
      { href: "#skills", label: "Skills" },
    ],
    suggestion: "What are his COO duties?",
  },
  {
    id: "nunn",
    keywords: [
      "nunn",
      "nunn corporation",
      "nunn ops",
      "nunn applied",
      "applied systems",
      "co-founder",
      "cofounder",
      "lead developer",
      "sole developer",
      "planning workspace",
    ],
    reply:
      "Nunn Corporation is the parent. Freddie is COO there; that role also covers co-founder and lead-developer work on Nunn Applied Systems — a proposed Arizona LLC subsidiary that is not formed (not listed as a separate job). Nunn Ops is the planning workspace he builds and runs: development operations and corporate infrastructure. Evidence-labeled; not a live product claim for the unformed subsidiary.",
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
      "Algorithm Academy is Freddie's parent product house — he is founder and sole operator covering CEO and COO duties. He sets strategy and runs development operations across the company hub, Online learning MVP (XP, streaks, hearts), Developer Hub, LifeLong Studios, and Pyforge. Open Experience or Work for the full duty list and products.",
    links: [
      { href: "#experience", label: "Experience" },
      { href: "#work", label: "Work" },
      { href: "#about", label: "About" },
    ],
    suggestion: "What is Algorithm Academy?",
  },
  {
    id: "aa-duties",
    keywords: [
      "academy duties",
      "algorithm academy duties",
      "ceo and coo",
      "ceo & coo",
      "founder ceo",
      "what does he do at algorithm",
      "lifelong duties",
    ],
    reply:
      "As founder of Algorithm Academy (covering CEO and COO duties as sole operator) he: (1) sets brand and product direction for the parent house and LifeLong Studios; (2) runs development operations across all Next.js apps (hub, Online, Dev Hub, LifeLong, Pyforge, portfolio); (3) ships Online learning and Developer Hub; (4) leads Unity and Roblox under LifeLong, including Zombie Invasion with IP-safe names; (5) gates marketing go-live until experiences are capture-ready.",
    links: [
      { href: "#experience", label: "Experience" },
      { href: "#work", label: "Work" },
    ],
    suggestion: "What are his Algorithm Academy duties?",
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
      "study",
      "studied",
      "full sail",
      "bachelor",
      "gpa",
      "university",
    ],
    reply:
      "Freddie is in Full Sail University's online B.S. in Web Development (project-based; self-stated 4.0 GPA). The program covers front-end (HTML/CSS/JS/React, UI/UX), server-side (Node/Express, APIs), databases (relational and MongoDB), cloud deployment, application security/SSO, CMS, data visualization, and six portfolio courses. Experience includes weather and quiz apps, a blogging platform with auth, e-commerce, and a social chat app. See Education for the full skill and coursework lists.",
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
      "contact freddie",
      "how do i contact",
      "contact info",
      "email",
      "hire",
      "reach out",
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
      "This profile follows a LinkedIn-style layout. Jump with the nav or ask me: About, Featured, Experience, Education, Licenses & certifications, Skills, Projects, Contact. I reply with links you can click.",
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
