import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { contactEmail, githubUrl, linkedInUrl } from "@/lib/site";

export function ContactSection() {
  return (
    <Container
      as="section"
      id="contact"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Contact
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Let’s build something.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Open to collaboration on operations tooling, web products, learning
        experiences, and game prototypes. Reach me directly or find the public
        work on GitHub and LinkedIn.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </Button>
        <Button asChild variant="secondary">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild variant="ghost">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link href="#experience">Back to experience</Link>
        </Button>
      </div>
    </Container>
  );
}
