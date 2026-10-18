export type NavItem = {
  label: string;
  href: string;
};

export type ProjectCategory =
  | "product"
  | "game"
  | "engine"
  | "roblox"
  | "ops"
  | "jam";

export type ProjectStatus =
  | "live"
  | "prototype"
  | "in-development"
  | "planned"
  | "released";

export type ProjectEntry = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  stack: string[];
  href: string;
  hrefLabel: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
};

export type ExperienceEntry = {
  id: string;
  title: string;
  organization: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  href?: string;
  hrefLabel?: string;
};

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  detail?: string;
  coursework?: string[];
};

export type CertificationEntry = {
  id: string;
  title: string;
  issuer: string;
  href?: string;
};

export type JamEntry = {
  id: string;
  title: string;
  jam: string;
  result: string;
  summary: string;
  href: string;
  jamHref: string;
};

export type ChatLink = {
  href: string;
  label: string;
};

export type ChatTopic = {
  id: string;
  keywords: string[];
  reply: string;
  links: ChatLink[];
  suggestion?: string;
};
