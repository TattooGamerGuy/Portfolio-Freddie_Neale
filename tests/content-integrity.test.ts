import { describe, expect, it } from "vitest";
import { certifications } from "@/content/certifications";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/featured";
import { jams } from "@/content/jams";
import {
  getProjectsByCategory,
  projects,
} from "@/content/projects";
import { skillGroups } from "@/content/skills";
import type {
  ProjectCategory,
  ProjectStatus,
} from "@/lib/types";
import { isAllowedHref } from "./helpers/links";

const categories: ProjectCategory[] = [
  "product",
  "game",
  "engine",
  "roblox",
  "ops",
  "jam",
];

const statuses: ProjectStatus[] = [
  "live",
  "prototype",
  "in-development",
  "planned",
  "released",
];

describe("content integrity", () => {
  it("experience entries are complete and unique", () => {
    expect(experience.length).toBeGreaterThan(0);
    const ids = new Set<string>();
    for (const entry of experience) {
      expect(entry.id).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.organization).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(entry.summary.length).toBeGreaterThan(20);
      expect(entry.highlights.length).toBeGreaterThan(0);
      expect(ids.has(entry.id)).toBe(false);
      ids.add(entry.id);
      if (entry.href) {
        expect(isAllowedHref(entry.href)).toBe(true);
        expect(entry.hrefLabel).toBeTruthy();
      }
    }
  });

  it("lists one Nunn COO role (incl. Applied Systems) and Founder at Algorithm Academy", () => {
    const nunnRoles = experience.filter((e) => /nunn/i.test(e.organization));
    expect(nunnRoles).toHaveLength(1);
    expect(nunnRoles[0]?.title).toMatch(/coo/i);
    expect(nunnRoles[0]?.summary).toMatch(/nunn applied systems/i);
    expect(nunnRoles[0]?.summary).toMatch(/proposed/i);
    const aa = experience.find((e) => /algorithm academy/i.test(e.organization));
    expect(aa?.title).toMatch(/^Founder$/);
    expect(aa?.current).toBe(true);
    expect(aa?.summary).toMatch(/CEO and COO duties/i);
    expect(aa?.highlights.some((h) => /CEO duties/i.test(h))).toBe(true);
    expect(aa?.highlights.some((h) => /COO/i.test(h))).toBe(true);
  });

  it("education entries are complete", () => {
    expect(education.length).toBeGreaterThan(0);
    for (const entry of education) {
      expect(entry.id).toBeTruthy();
      expect(entry.degree).toBeTruthy();
      expect(entry.institution).toBeTruthy();
    }
    const fullSail = education.find((e) => /full sail/i.test(e.institution));
    expect(fullSail).toBeDefined();
    expect(fullSail?.skills?.length).toBeGreaterThan(10);
    expect(fullSail?.experience?.length).toBeGreaterThan(3);
    expect(fullSail?.coursework?.length).toBeGreaterThan(10);
    expect(fullSail?.summary).toMatch(/web/i);
    expect(fullSail?.detail).toMatch(/4\.0/);
    expect(fullSail?.href).toMatch(/Full-Sail-University/);
  });

  it("certifications have issuers and safe links", () => {
    expect(certifications.length).toBeGreaterThan(0);
    for (const cert of certifications) {
      expect(cert.id).toBeTruthy();
      expect(cert.title).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      if (cert.href) expect(isAllowedHref(cert.href)).toBe(true);
    }
  });

  it("projects have unique slugs, valid categories, and safe hrefs", () => {
    expect(projects.length).toBeGreaterThan(5);
    const slugs = new Set<string>();
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(slugs.has(project.slug)).toBe(false);
      slugs.add(project.slug);
      expect(categories).toContain(project.category);
      expect(statuses).toContain(project.status);
      expect(project.title).toBeTruthy();
      expect(project.summary.length).toBeGreaterThan(10);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(isAllowedHref(project.href)).toBe(true);
      expect(project.hrefLabel).toBeTruthy();
    }
  });

  it("getProjectsByCategory partitions without dropping entries", () => {
    const counted = categories.reduce(
      (sum, category) => sum + getProjectsByCategory(category).length,
      0,
    );
    expect(counted).toBe(projects.length);
  });

  it("includes Zombie Invasion, Nunn Ops, and LifeLong Studios", () => {
    expect(projects.some((p) => p.slug === "zombie-invasion")).toBe(true);
    expect(projects.some((p) => p.slug === "nunn-ops")).toBe(true);
    expect(projects.some((p) => /lifelong/i.test(p.title))).toBe(true);
  });

  it("featured projects resolve from the projects catalog", () => {
    expect(featuredProjects.length).toBe(4);
    for (const featured of featuredProjects) {
      expect(projects.some((p) => p.slug === featured.slug)).toBe(true);
    }
  });

  it("jam entries have itch and jam links", () => {
    expect(jams.length).toBeGreaterThanOrEqual(2);
    for (const jam of jams) {
      expect(jam.id).toBeTruthy();
      expect(jam.title).toBeTruthy();
      expect(jam.result).toBeTruthy();
      expect(isAllowedHref(jam.href)).toBe(true);
      expect(isAllowedHref(jam.jamHref)).toBe(true);
    }
  });

  it("skill groups are non-empty with unique ids", () => {
    expect(skillGroups.length).toBeGreaterThan(0);
    const ids = new Set(skillGroups.map((g) => g.id));
    expect(ids.size).toBe(skillGroups.length);
    for (const group of skillGroups) {
      expect(group.title).toBeTruthy();
      expect(group.skills.length).toBeGreaterThan(0);
    }
  });
});
