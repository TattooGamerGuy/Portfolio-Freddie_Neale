import { describe, expect, it } from "vitest";
import {
  HEADLINE,
  INDUSTRY,
  LOCATION,
  ROLE_LINE,
  ROLE_SECONDARY,
  SITE_NAME,
  TAGLINE,
  academySiteUrl,
  contactEmail,
  githubUrl,
  lifeLongSiteUrl,
  linkedInUrl,
  navItems,
  nunnOpsRepoUrl,
  zombieInvasionUrl,
} from "@/lib/site";
import { isAllowedHref, isHashHref } from "./helpers/links";

describe("site constants", () => {
  it("uses COO as the current title", () => {
    expect(SITE_NAME).toBe("Freddie Neale");
    expect(ROLE_LINE).toBe("COO, Nunn Corporation");
    expect(ROLE_SECONDARY).toMatch(/Algorithm Academy/i);
    expect(ROLE_SECONDARY).toMatch(/Founder/i);
    expect(HEADLINE).toContain(ROLE_LINE);
    expect(HEADLINE).toContain(ROLE_SECONDARY);
    expect(TAGLINE).toMatch(/LifeLong Studios/i);
    expect(TAGLINE).toMatch(/Nunn Applied Systems/i);
    expect(TAGLINE).not.toMatch(/Bloodshot Studios/i);
  });

  it("exposes location and industry for the profile header", () => {
    expect(LOCATION).toBeTruthy();
    expect(INDUSTRY).toBeTruthy();
  });

  it("has valid contact and social URLs", () => {
    expect(contactEmail).toMatch(/@/);
    expect(isAllowedHref(githubUrl)).toBe(true);
    expect(githubUrl).toMatch(/TattooGamerGuy/);
    expect(isAllowedHref(linkedInUrl)).toBe(true);
    expect(linkedInUrl).toMatch(/freddie-neale-7679a829a/);
    expect(isAllowedHref(nunnOpsRepoUrl)).toBe(true);
    expect(isAllowedHref(zombieInvasionUrl)).toBe(true);
    expect(isAllowedHref(academySiteUrl)).toBe(true);
    expect(isAllowedHref(lifeLongSiteUrl)).toBe(true);
  });

  it("nav items cover LinkedIn-style profile sections", () => {
    const hrefs = navItems.map((item) => item.href);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "#about",
        "#featured",
        "#experience",
        "#education",
        "#licenses",
        "#skills",
        "#contact",
      ]),
    );
    for (const item of navItems) {
      expect(item.label).toBeTruthy();
      expect(isHashHref(item.href)).toBe(true);
    }
  });
});
