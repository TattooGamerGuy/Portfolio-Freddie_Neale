import { projects } from "@/content/projects";
import type { ProjectEntry } from "@/lib/types";

const featuredSlugs = [
  "nunn-ops",
  "zombie-invasion",
  "algorithm-academy-online",
  "bounce-golf",
] as const;

export const featuredProjects: ProjectEntry[] = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is ProjectEntry => Boolean(project));
