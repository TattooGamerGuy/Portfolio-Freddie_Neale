"use client";

import Link from "next/link";
import { Code2Icon, ExternalLinkIcon, MailIcon, SparklesIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  HEADLINE,
  INDUSTRY,
  LOCATION,
  PROFILE_PHOTO_URL,
  ROLE_LINE,
  SITE_NAME,
  contactEmail,
  githubUrl,
  linkedInUrl,
} from "@/lib/site";
import { openPortfolioSentinelChat } from "@/lib/sentinel-chat-store";

export function ProfileIntro() {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div
        className="relative h-32 overflow-hidden sm:h-40"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#0f766e_0%,#134e4a_38%,#0b1220_100%)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 30%, rgba(45,212,191,0.45), transparent 42%), radial-gradient(circle at 88% 10%, rgba(255,255,255,0.18), transparent 36%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <CardContent className="relative px-5 pb-6 sm:px-6">
        <div className="-mt-14 mb-4 flex items-end justify-between gap-3 sm:-mt-16">
          <Avatar className="size-28 border-4 border-card shadow-lg sm:size-36">
            <AvatarImage src={PROFILE_PHOTO_URL} alt={`${SITE_NAME} profile photo`} />
            <AvatarFallback className="bg-secondary text-2xl text-secondary-foreground">
              FN
            </AvatarFallback>
          </Avatar>
          <div className="mb-1 hidden flex-wrap justify-end gap-2 sm:flex">
            <Button asChild>
              <a href={`mailto:${contactEmail}`}>
                <MailIcon />
                Contact
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon />
                LinkedIn
              </a>
            </Button>
            <Button type="button" variant="outline" onClick={openPortfolioSentinelChat}>
              <SparklesIcon />
              Ask Sentinel
            </Button>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {SITE_NAME}
            </h1>
            <Badge>Open to collaborate</Badge>
          </div>
          <p className="mt-2 text-base leading-snug text-foreground sm:text-lg">
            {HEADLINE}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {LOCATION} · {INDUSTRY}
          </p>
          <p className="mt-1 text-sm font-semibold text-primary">
            {ROLE_LINE} ·{" "}
            <Link href="#experience" className="hover:underline">
              Algorithm Academy
            </Link>
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
          <Button asChild size="sm">
            <a href={`mailto:${contactEmail}`}>
              <MailIcon />
              Contact
            </a>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon />
              LinkedIn
            </a>
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={openPortfolioSentinelChat}
          >
            <SparklesIcon />
            Ask Sentinel
          </Button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild variant="ghost" size="sm" className="px-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Code2Icon />
              GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="px-2">
            <a href={`mailto:${contactEmail}`}>
              <MailIcon />
              Email
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="px-2">
            <a href="#contact">Contact info</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
