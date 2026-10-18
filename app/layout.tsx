import type { Metadata } from "next";
import { Source_Serif_4, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE_NAME, defaultMetadata } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    absolute: `${SITE_NAME} · COO, Nunn Corporation`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-body text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
