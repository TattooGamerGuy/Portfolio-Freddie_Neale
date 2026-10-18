import { Container } from "@/components/ui/Container";
import { skillGroups } from "@/content/skills";

export function SkillsSection() {
  return (
    <Container as="section" id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Skills
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Craft across ops, web, Unity, and Roblox.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Skills drawn from Nunn Ops planning work, Algorithm Academy products,
        LifeLong Studios, Unity titles, and Roblox experiences.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="font-display text-lg font-bold text-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
