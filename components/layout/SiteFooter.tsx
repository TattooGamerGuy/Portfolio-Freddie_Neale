import { Container } from "@/components/ui/Container";
import {
  SITE_NAME,
  contactEmail,
  githubUrl,
  linkedInUrl,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm text-muted-foreground">
          © {year} {SITE_NAME}. Algorithm Academy & LifeLong Studios. COO, Nunn
          Corporation.
        </p>
        <div className="flex flex-wrap gap-4 font-display text-sm font-semibold">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            GitHub
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
