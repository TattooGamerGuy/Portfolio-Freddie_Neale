import { Badge } from "@/components/ui/badge";
import { OrgMark } from "@/components/profile/OrgMark";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Separator } from "@/components/ui/separator";
import { jams } from "@/content/jams";
import { getProjectsByCategory } from "@/content/projects";
import type { ProjectEntry } from "@/lib/types";

const groups: {
  id: string;
  title: string;
  category: ProjectEntry["category"];
}[] = [
  { id: "ops", title: "Operations", category: "ops" },
  { id: "products", title: "Products", category: "product" },
  { id: "engine", title: "Engine", category: "engine" },
  { id: "games", title: "Unity games", category: "game" },
  { id: "roblox", title: "Roblox", category: "roblox" },
  { id: "jams", title: "Projects from game jams", category: "jam" },
];

const statusLabel: Record<ProjectEntry["status"], string> = {
  live: "Live",
  prototype: "Prototype",
  "in-development": "In development",
  planned: "Planned",
  released: "Released",
};

function ProjectRow({ project }: { project: ProjectEntry }) {
  const external =
    project.href.startsWith("http://") || project.href.startsWith("https://");

  return (
    <a
      href={project.href}
      className="flex gap-3 rounded-md p-1 transition-colors hover:bg-muted/50"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <OrgMark label={project.title} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display text-sm font-semibold text-foreground">
            {project.title}
          </h4>
          <Badge variant="outline">{statusLabel[project.status]}</Badge>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {project.stack.join(" · ")}
        </p>
      </div>
    </a>
  );
}

export function WorkSection() {
  return (
    <ProfileCard id="work" title="Projects">
      <div className="space-y-6">
        {groups.map((group) => {
          const items = getProjectsByCategory(group.category);
          if (items.length === 0) return null;
          return (
            <div key={group.id}>
              <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {items.map((project, index) => (
                  <li key={project.slug}>
                    {index > 0 ? <Separator className="mb-3" /> : null}
                    <ProjectRow project={project} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <Separator className="my-6" />

      <h3 className="font-display text-base font-semibold text-foreground">
        Game jam results
      </h3>
      <ul className="mt-3 space-y-3">
        {jams.map((jam) => (
          <li key={jam.id} className="text-sm leading-relaxed text-muted-foreground">
            <a
              href={jam.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary"
            >
              {jam.title}
            </a>
            {" — "}
            <a
              href={jam.jamHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {jam.jam}
            </a>
            . {jam.result}.
          </li>
        ))}
      </ul>
    </ProfileCard>
  );
}
