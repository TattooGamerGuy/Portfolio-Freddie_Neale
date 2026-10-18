import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type OrgMarkProps = {
  label: string;
  className?: string;
};

/** Org mark via shadcn Avatar fallback. */
export function OrgMark({ label, className }: OrgMarkProps) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <Avatar
      className={cn("size-12 rounded-xl bg-secondary text-secondary-foreground", className)}
      aria-hidden
    >
      <AvatarFallback className="rounded-xl bg-secondary font-display text-sm font-bold text-secondary-foreground">
        {initials || "·"}
      </AvatarFallback>
    </Avatar>
  );
}
