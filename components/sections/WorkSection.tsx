import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
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
  { id: "jams", title: "Game jams & itch.io", category: "jam" },
];

const statusLabel: Record<ProjectEntry["status"], string> = {
  live: "Live",
  prototype: "Prototype",
  "in-development": "In development",
  planned: "Planned",
  released: "Released",
};

function ProjectCard({ project }: { project: ProjectEntry }) {
  const external =
    project.href.startsWith("http://") || project.href.startsWith("https://");

  return (
    <a
      href={project.href}
      className="block h-full"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle>{project.title}</CardTitle>
            <Badge variant="warm" className="shrink-0">
              {statusLabel[project.status]}
            </Badge>
          </div>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-2">
          <p className="font-display text-xs font-semibold text-muted-foreground">
            {project.stack.join(" · ")}
          </p>
          <p className="font-display text-sm font-semibold text-primary">
            {project.hrefLabel} →
          </p>
        </CardFooter>
      </Card>
    </a>
  );
}

export function WorkSection() {
  return (
    <Container as="section" id="work" className="scroll-mt-24 py-20 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Work
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Products, games, Roblox, and jam entries.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Nunn Ops planning workspace, Algorithm Academy products, LifeLong
        Studios titles, Zombie Invasion on Roblox, and published itch.io jam
        games.
      </p>

      <div className="mt-14 space-y-14">
        {groups.map((group) => {
          const items = getProjectsByCategory(group.category);
          if (items.length === 0) return null;
          return (
            <div key={group.id}>
              <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card/30 p-6">
        <h3 className="font-display text-lg font-bold text-foreground">
          Jam results at a glance
        </h3>
        <ul className="mt-4 space-y-4">
          {jams.map((jam) => (
            <li key={jam.id} className="text-sm leading-relaxed text-muted-foreground">
              <a
                href={jam.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-foreground hover:text-primary"
              >
                {jam.title}
              </a>
              {" — "}
              <a
                href={jam.jamHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                {jam.jam}
              </a>
              . {jam.result}. {jam.summary}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
