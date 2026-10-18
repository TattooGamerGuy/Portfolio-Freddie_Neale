"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SITE_NAME, navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-fn-line/70 bg-fn-bg/80 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-fn-ink sm:text-xl"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="fn-nav-link font-display text-sm font-semibold text-fn-ink-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="fn-cta inline-flex items-center rounded-md border border-fn-line px-3 py-2 font-display text-sm font-semibold text-fn-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-fn-line bg-fn-bg-elevated md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="fn-nav-link rounded-md px-2 py-2 font-display text-sm font-semibold text-fn-ink-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
