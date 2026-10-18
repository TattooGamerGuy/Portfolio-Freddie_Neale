import { OrgMark } from "@/components/profile/OrgMark";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Separator } from "@/components/ui/separator";
import { certifications } from "@/content/certifications";

export function LicensesSection() {
  return (
    <ProfileCard id="licenses" title="Licenses & certifications">
      <ul>
        {certifications.map((cert, index) => (
          <li key={cert.id}>
            {index > 0 ? <Separator className="my-4" /> : null}
            <div className="flex gap-3">
              <OrgMark label={cert.issuer} />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Show credential →
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
