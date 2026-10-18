import type { Metadata } from "next";
import type { NavItem } from "@/lib/types";

export const SITE_NAME = "Freddie Neale";

export const ROLE_LINE = "COO, Nunn Corporation";

export const ROLE_SECONDARY =
  "Founder, Algorithm Academy · Full-stack, Unity & Roblox";

export const TAGLINE =
  "Operating Nunn Ops while building Algorithm Academy — learning software, creator tools, Unity games, and Roblox experiences through LifeLong Studios.";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3005";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "Freddie.Neale86@gmail.com";

export const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL?.replace(/\/$/, "") ??
  "https://github.com/TattooGamerGuy";

export const linkedInUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL?.replace(/\/$/, "") ??
  "https://www.linkedin.com/in/freddie-neale-7679a829a";

export const academySiteUrl =
  process.env.NEXT_PUBLIC_ACADEMY_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const lifeLongSiteUrl =
  process.env.NEXT_PUBLIC_LIFELONG_SITE_URL?.replace(/\/$/, "") ??
  process.env.NEXT_PUBLIC_BLOODSHOT_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3001";

export const pyforgeSiteUrl =
  process.env.NEXT_PUBLIC_PYFORGE_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3002";

export const onlineAppUrl =
  process.env.NEXT_PUBLIC_ONLINE_APP_URL?.replace(/\/$/, "") ??
  "http://localhost:3003";

export const devhubUrl =
  process.env.NEXT_PUBLIC_DEVHUB_URL?.replace(/\/$/, "") ??
  "http://localhost:3004";

export const robloxCreateUrl =
  process.env.NEXT_PUBLIC_ROBLOX_CREATE_URL?.replace(/\/$/, "") ??
  "https://create.roblox.com";

export const zombieInvasionUrl =
  process.env.NEXT_PUBLIC_ZOMBIE_INVASION_URL?.replace(/\/$/, "") ??
  "https://www.roblox.com/games/127460517464929";

export const itchStudioUrl =
  process.env.NEXT_PUBLIC_ITCH_STUDIO_URL?.replace(/\/$/, "") ??
  "https://bloodshotstudios.itch.io";

export const nunnOpsRepoUrl =
  "https://github.com/TattooGamerGuy/Nunn-Applied-Systems";

export const navItems: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} · COO, Nunn Corporation`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Freddie Neale — COO at Nunn Corporation and founder of Algorithm Academy. Full-stack web, Unity and Roblox development, and LifeLong Studios experiences.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
};
