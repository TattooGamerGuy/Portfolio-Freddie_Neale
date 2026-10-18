import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <Container
      as="section"
      id="experience"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Experience
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Current roles and operating work.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        COO seat at Nunn Corporation and founder of Algorithm Academy — planning
        workspace operations alongside product and game shipping.
      </p>

      <ol className="mt-12 space-y-0">
        {experience.map((entry, index) => (
          <li key={entry.id} className="relative grid gap-4 py-8 sm:grid-cols-[7rem_1fr]">
            {index > 0 ? (
              <Separator className="absolute inset-x-0 top-0 sm:left-[7rem]" />
            ) : null}
            <div className="font-display text-sm font-semibold text-muted-foreground">
              {entry.period}
              {entry.current ? (
                <Badge className="mt-2 block w-fit" variant="default">
                  Current
                </Badge>
              ) : null}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {entry.title}
              </h3>
              <p className="mt-1 font-display text-sm font-semibold text-primary">
                {entry.organization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {entry.href ? (
                <Button asChild variant="link" className="mt-3 h-auto px-0">
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.hrefLabel ?? "Learn more"} →
                  </a>
                </Button>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-2 text-sm text-muted-foreground">
        Prefer a guided walkthrough?{" "}
        <Link href="#contact" className="font-semibold text-primary underline-offset-4 hover:underline">
          Contact
        </Link>{" "}
        or open the Sentinel portfolio guide from the floating button.
      </p>
    </Container>
  );
}
