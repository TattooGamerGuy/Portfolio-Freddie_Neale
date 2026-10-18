import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProfileCardProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
};

/** Profile section built on shadcn Card. */
export function ProfileCard({
  id,
  title,
  children,
  className,
  action,
}: ProfileCardProps) {
  return (
    <Card id={id} className={cn("scroll-mt-24 gap-0 overflow-hidden", className)}>
      <CardHeader className="flex-row items-center justify-between gap-3 space-y-0 pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        {action}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
