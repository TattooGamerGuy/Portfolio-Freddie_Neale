import { Badge } from "@/components/ui/badge";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { academySiteUrl, lifeLongSiteUrl, nunnOpsRepoUrl } from "@/lib/site";

export function AboutSection() {
  return (
    <ProfileCard id="about" title="About">
      <div className="space-y-3 text-[15px] leading-relaxed text-foreground">
        <p>
          As COO of Nunn Corporation I run{" "}
          <a
            href={nunnOpsRepoUrl}
            className="font-semibold text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nunn Ops
          </a>
          — including co-founder and lead-developer work for proposed Nunn
          Applied Systems: development operations, corporate infrastructure,
          registries, and cadence. Executive, legal, and financial decisions
          stay with the CEO. Applied Systems is not a formed entity or live
          product.
        </p>
        <p>
          As founder of{" "}
          <a
            href={academySiteUrl}
            className="font-semibold text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algorithm Academy
          </a>
          I cover CEO and COO duties as sole operator — strategy plus
          development operations across the company hub, Online learning app,
          Developer Hub,{" "}
          <a
            href={lifeLongSiteUrl}
            className="font-semibold text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LifeLong Studios
          </a>
          , and Pyforge — including Zombie Invasion on Roblox (Aether Hideout →
          Aether Foundry).
        </p>
        <p>
          Stack focus: Next.js, React, TypeScript, Unity 6, and Roblox Luau.
          Published jam games live on itch.io. Use the Sentinel guide for a
          quick tour of this profile.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "Next.js",
          "TypeScript",
          "Unity",
          "Roblox",
          "Founder-operated",
          "DevOps leadership",
          "Corporate infrastructure",
        ].map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </ProfileCard>
  );
}
