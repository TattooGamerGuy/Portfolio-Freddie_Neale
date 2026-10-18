import { Badge } from "@/components/ui/badge";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Separator } from "@/components/ui/separator";
import { skillGroups } from "@/content/skills";

export function SkillsSection() {
  return (
    <ProfileCard id="skills" title="Skills">
      <ul>
        {skillGroups.map((group, index) => (
          <li key={group.id}>
            {index > 0 ? <Separator className="my-4" /> : null}
            <h3 className="font-display text-base font-semibold text-foreground">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </ProfileCard>
  );
}
