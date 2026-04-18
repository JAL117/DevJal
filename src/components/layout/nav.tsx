"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { GithubIcon } from "@/components/icons/brand";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 glass-strong">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight cursor-pointer"
          aria-label="Inicio"
        >
          <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand to-purple-600 text-brand-foreground text-sm font-bold shadow-md transition-transform duration-300 group-hover:scale-105">
            <span className="relative z-10">J</span>
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
          <span className="hidden font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
            / portfolio
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-border/50 bg-background/40 p-1 shadow-sm backdrop-blur">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full bg-accent shadow-sm"
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-accent hover:text-foreground cursor-pointer"
          >
            <GithubIcon className="size-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
