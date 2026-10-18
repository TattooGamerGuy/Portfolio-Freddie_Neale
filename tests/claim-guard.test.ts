import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = join(process.cwd());

function walk(dir: string, files: string[] = []) {
  for (const name of readdirSync(dir)) {
    if (
      name === "node_modules" ||
      name === ".next" ||
      name === ".git" ||
      name === "coverage"
    ) {
      continue;
    }
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path, files);
    else if (/\.(ts|tsx|md)$/.test(name)) files.push(path);
  }
  return files;
}

describe("claim and brand guard", () => {
  it("does not market Bloodshot Studios as the current studio brand in site copy modules", () => {
    const guarded = [
      join(root, "lib/site.ts"),
      join(root, "components/sections/AboutSection.tsx"),
      join(root, "components/layout/SiteFooter.tsx"),
      join(root, "components/profile/ProfileIntro.tsx"),
    ];
    for (const file of guarded) {
      const text = readFileSync(file, "utf8");
      expect(text, file).not.toMatch(/Bloodshot Studios/);
    }
  });

  it("keeps Sentinel chat labeled as simulated / no live model", () => {
    const chat = readFileSync(join(root, "content/portfolio-chat.ts"), "utf8");
    expect(chat).toMatch(/No AI model is called/);
    expect(chat).toMatch(/portfolio guide/i);
  });

  it("Nunn experience copy stays planning-workspace honest and consolidated", () => {
    const experience = readFileSync(join(root, "content/experience.ts"), "utf8");
    expect(experience).toMatch(/planning workspace/i);
    expect(experience).toMatch(/proposed/i);
    expect(experience).not.toMatch(/Acting COO/i);
    expect(experience).not.toMatch(/pending/i);
    expect(experience).not.toMatch(/operator-stated/i);
    expect(experience).toMatch(/development operations/i);
    expect(experience).toMatch(/corporate infrastructure/i);
    expect(experience).toMatch(/Recommends and implements/i);
    expect(experience).toMatch(/co-founder & lead developer/i);
    expect(experience).not.toMatch(/sole developer/i);
    expect(experience).not.toMatch(/not yet formed/i);
    expect(experience).not.toMatch(/id: "cofounder-nas"/);
    expect(experience).toMatch(/title: "Founder"/);
    expect(experience).toMatch(/CEO duties/);
    expect(experience).toMatch(/COO \/ development operations/);
    expect(experience).toMatch(/Algorithm Academy/);
  });

  it("source tree still builds with TypeScript modules under app/components/content/lib", () => {
    const files = walk(root);
    expect(files.some((f) => f.endsWith("app\\page.tsx") || f.endsWith("app/page.tsx"))).toBe(
      true,
    );
    expect(
      files.some(
        (f) =>
          f.endsWith("lib\\portfolio-chat.ts") ||
          f.endsWith("lib/portfolio-chat.ts"),
      ),
    ).toBe(true);
  });
});
