import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { certifications } from "@/content/certifications";
import { education } from "@/content/education";

export function EducationSection() {
  return (
    <Container
      as="section"
      id="education"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Education
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Degree and certifications.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Academic record from Full Sail University coursework, plus LinkedIn
        Learning certificates.
      </p>

      <div className="mt-12 space-y-6">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="rounded-xl border border-border bg-card/40 p-6"
          >
            <h3 className="font-display text-xl font-bold text-foreground">
              {entry.degree}
            </h3>
            <p className="mt-1 font-display text-sm font-semibold text-primary">
              {entry.institution}
            </p>
            {entry.detail ? (
              <p className="mt-2 text-sm text-muted-foreground">{entry.detail}</p>
            ) : null}
            {entry.coursework && entry.coursework.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.coursework.map((course) => (
                  <li key={course}>
                    <Badge variant="outline">{course}</Badge>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      <h3 className="mt-14 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Certifications
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.id}>
            <CardHeader>
              <CardTitle>{cert.title}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </CardHeader>
            {cert.href ? (
              <CardContent>
                <Button asChild variant="link" className="h-auto px-0">
                  <a href={cert.href} target="_blank" rel="noopener noreferrer">
                    View certificate post →
                  </a>
                </Button>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </Container>
  );
}
