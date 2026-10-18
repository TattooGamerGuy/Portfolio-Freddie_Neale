import { OrgMark } from "@/components/profile/OrgMark";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Badge } from "@/components/ui/badge";
import { education } from "@/content/education";

export function EducationSection() {
  return (
    <ProfileCard id="education" title="Education">
      <ul className="space-y-5">
        {education.map((entry) => (
          <li key={entry.id} className="flex gap-3">
            <OrgMark label={entry.institution} />
            <div className="min-w-0 flex-1 space-y-3">
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {entry.institution}
                </h3>
                <p className="text-sm text-foreground">{entry.degree}</p>
                {entry.detail ? (
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {entry.detail}
                  </p>
                ) : null}
              </div>

              {entry.summary ? (
                <p className="text-sm leading-relaxed text-foreground">
                  {entry.summary}
                </p>
              ) : null}

              {entry.skills && entry.skills.length > 0 ? (
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Skills gained
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {entry.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}

              {entry.experience && entry.experience.length > 0 ? (
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Experience from the program
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {entry.experience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {entry.coursework && entry.coursework.length > 0 ? (
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Coursework
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {entry.coursework.join(" · ")}
                  </p>
                </div>
              ) : null}

              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-primary hover:underline"
                >
                  {entry.hrefLabel ?? "Learn more"} →
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </ProfileCard>
  );
}
