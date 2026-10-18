"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import {
  ROLE_LINE,
  ROLE_SECONDARY,
  SITE_NAME,
  TAGLINE,
} from "@/lib/site";
import { openPortfolioSentinelChat } from "@/lib/sentinel-chat-store";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[min(100svh,52rem)] overflow-hidden">
      <div
        className="fn-hero-visual absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(45,212,191,0.18),transparent_55%),linear-gradient(125deg,#0c1118_0%,#152033_48%,#101820_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,238,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,238,246,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <Container className="flex min-h-[min(100svh,52rem)] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-20">
        <p className="fn-animate-in font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {ROLE_LINE}
        </p>
        <h1 className="fn-animate-in mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {SITE_NAME}
        </h1>
        <p className="fn-animate-in-delay mt-4 max-w-2xl font-display text-lg font-semibold text-foreground/90 sm:text-xl">
          {ROLE_SECONDARY}
        </p>
        <p className="fn-animate-in-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {TAGLINE}
        </p>
        <div className="fn-animate-in-delay-2 mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="#experience">View experience</Link>
          </Button>
          <Button type="button" variant="secondary" onClick={openPortfolioSentinelChat}>
            Ask Sentinel
          </Button>
        </div>
      </Container>
    </section>
  );
}
