import { Container } from "@/components/ui/Container";
import { academySiteUrl, lifeLongSiteUrl, nunnOpsRepoUrl } from "@/lib/site";

export function AboutSection() {
  return (
    <Container as="section" id="about" className="scroll-mt-24 py-20 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        About
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        COO at Nunn. Founder of Algorithm Academy.
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          I operate the{" "}
          <a
            href={nunnOpsRepoUrl}
            className="font-semibold text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nunn Ops
          </a>{" "}
          planning workspace as COO of Nunn Corporation — evidence-labeled
          registries, gaps, and cadence. Executive, legal, and financial
          decisions stay with the CEO. Nunn Applied Systems remains a proposed
          subsidiary, not a live product or corporate filing.
        </p>
        <p>
          In parallel I build{" "}
          <a
            href={academySiteUrl}
            className="font-semibold text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algorithm Academy
          </a>
          : learning software, a Developer Hub for creators, and games through{" "}
          <a
            href={lifeLongSiteUrl}
            className="font-semibold text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LifeLong Studios
          </a>
          — including Zombie Invasion on Roblox (Aether Hideout → Aether
          Foundry).
        </p>
        <p>
          On the web side I work in Next.js, React, TypeScript, and Tailwind. On
          the game side I prototype in Unity 6 and Roblox Studio with Luau, and
          I ship jam games on itch.io. This portfolio ties those surfaces back
          to me — use the Sentinel guide if you want a quick tour.
        </p>
      </div>
    </Container>
  );
}
