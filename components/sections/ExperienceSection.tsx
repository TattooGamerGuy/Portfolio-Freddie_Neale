import { OrgMark } from "@/components/profile/OrgMark";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Separator } from "@/components/ui/separator";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <ProfileCard id="experience" title="Experience">
      <ul>
        {experience.map((entry, index) => (
          <li key={entry.id}>
            {index > 0 ? <Separator className="my-4" /> : null}
            <div className="flex gap-3">
              <OrgMark label={entry.organization} />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {entry.title}
                </h3>
                <p className="text-sm text-foreground">{entry.organization}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {entry.period}
                  {entry.current ? " · Current" : ""}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {entry.summary}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    {entry.hrefLabel ?? "Learn more"} →
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ProfileCard>
  );
}
