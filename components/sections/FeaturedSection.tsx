import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { featuredProjects } from "@/content/featured";

const statusLabel = {
  live: "Live",
  prototype: "Prototype",
  "in-development": "In development",
  planned: "Planned",
  released: "Released",
} as const;

export function FeaturedSection() {
  return (
    <ProfileCard id="featured" title="Featured">
      <div className="-mx-1 flex gap-3 overflow-x-auto pb-1 pt-1">
        {featuredProjects.map((project) => {
          const external =
            project.href.startsWith("http://") ||
            project.href.startsWith("https://");
          return (
            <a
              key={project.slug}
              href={project.href}
              className="block w-72 shrink-0"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Card className="h-full gap-0 transition-transform hover:-translate-y-0.5">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <Badge variant="outline" className="shrink-0">
                      {statusLabel[project.status]}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-xs text-muted-foreground">
                    {project.stack.slice(0, 3).join(" · ")}
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-semibold text-primary">
                    {project.hrefLabel} →
                  </p>
                </CardFooter>
              </Card>
            </a>
          );
        })}
      </div>
    </ProfileCard>
  );
}
