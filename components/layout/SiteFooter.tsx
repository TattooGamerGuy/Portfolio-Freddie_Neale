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
    <footer className="border-t border-border bg-card py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {SITE_NAME}. Algorithm Academy & LifeLong Studios.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            GitHub
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="text-muted-foreground hover:text-primary hover:underline"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
