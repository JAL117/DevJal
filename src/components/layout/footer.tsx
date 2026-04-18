import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-purple-600 text-brand-foreground text-xs font-bold shadow-sm">
              J
            </span>
            <p className="text-sm font-medium">{siteConfig.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:items-end">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              {siteConfig.email}
            </Link>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
          <p className="font-mono text-[11px] text-muted-foreground/80">
            © {year} · Hecho con Next.js en Chiapas
          </p>
        </div>
      </div>
    </footer>
  );
}
