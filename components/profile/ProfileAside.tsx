import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import {
  INDUSTRY,
  LOCATION,
  contactEmail,
  githubUrl,
  linkedInUrl,
} from "@/lib/site";

export function ProfileAside() {
  const topRole = experience[0];
  const school = education[0];

  return (
    <aside className="space-y-3 lg:sticky lg:top-20">
      <ProfileCard title="Profile highlights">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-foreground">Current role</dt>
            <dd className="mt-1 text-muted-foreground">
              {topRole ? `${topRole.title} · ${topRole.organization}` : "—"}
            </dd>
          </div>
          <Separator />
          <div>
            <dt className="font-semibold text-foreground">Education</dt>
            <dd className="mt-1 text-muted-foreground">
              {school ? `${school.degree} · ${school.institution}` : "—"}
            </dd>
          </div>
          <Separator />
          <div>
            <dt className="font-semibold text-foreground">Location</dt>
            <dd className="mt-1 text-muted-foreground">{LOCATION}</dd>
          </div>
          <Separator />
          <div>
            <dt className="font-semibold text-foreground">Industry</dt>
            <dd className="mt-1 text-muted-foreground">{INDUSTRY}</dd>
          </div>
        </dl>
      </ProfileCard>

      <ProfileCard title="Contact">
        <div className="flex flex-col gap-2">
          <Button asChild variant="outline" className="justify-start">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </ProfileCard>
    </aside>
  );
}
