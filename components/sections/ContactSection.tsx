import { MailIcon, ExternalLinkIcon, Code2Icon } from "lucide-react";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { contactEmail, githubUrl, linkedInUrl } from "@/lib/site";

export function ContactSection() {
  return (
    <ProfileCard id="contact" title="Contact info">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Open to collaboration on operations tooling, web products, learning
        experiences, and game prototypes.
      </p>
      <Separator className="my-4" />
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-foreground">Email</dt>
          <dd>
            <a
              href={`mailto:${contactEmail}`}
              className="text-primary hover:underline"
            >
              {contactEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">LinkedIn</dt>
          <dd>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/freddie-neale-7679a829a
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">GitHub</dt>
          <dd>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/TattooGamerGuy
            </a>
          </dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button asChild>
          <a href={`mailto:${contactEmail}`}>
            <MailIcon />
            Send email
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon />
            View LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Code2Icon />
            GitHub
          </a>
        </Button>
      </div>
    </ProfileCard>
  );
}
