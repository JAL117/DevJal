"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { GithubIcon } from "@/components/icons/brand";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-[calc(env(safe-area-inset-top,0px)+0.5rem)] z-40 mx-2 mt-2 sm:top-[calc(env(safe-area-inset-top,0px)+1rem)] sm:mx-4 sm:mt-0">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl border border-border/60 glass-strong px-3 shadow-lg sm:h-16 sm:px-5">
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
            <span className="hidden text-foreground sm:inline">
              {siteConfig.shortName}
            </span>
            <span className="hidden font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground lg:inline">
              / portfolio
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-background/40 p-1 shadow-sm backdrop-blur md:flex">
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

          <div className="flex items-center gap-1.5">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden size-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-accent hover:text-foreground cursor-pointer sm:inline-flex"
            >
              <GithubIcon className="size-4" />
            </a>
            <ThemeToggle className="size-10" />
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer md:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-30 flex flex-col bg-background/95 px-6 pt-24 pb-10 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {siteConfig.nav.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "rounded-xl border border-border/60 px-5 py-4 text-lg font-medium transition-all duration-300 cursor-pointer",
                  active
                    ? "bg-accent text-foreground"
                    : "bg-card/50 text-muted-foreground hover:bg-accent hover:text-foreground",
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-6">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </a>
        </div>
      </div>
    </>
  );
}
