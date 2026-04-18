import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactCTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="group relative overflow-hidden rounded-3xl border border-border/60 glass-strong p-10 sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand/25 blur-[120px] animate-blob-1"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px] animate-blob-2 dark:bg-purple-500/20"
        />

        <div className="relative">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Contacto
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            ¿Tienes un{" "}
            <span className="text-gradient-brand animate-gradient">
              problema interesante
            </span>{" "}
            que construir?
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Abierto a colaboraciones, freelance o posiciones full-time. Si
            tienes una idea rondando, me gustaría escucharla. Respondo en menos
            de 24 horas.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group/btn relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full bg-foreground px-7 text-sm font-medium text-background shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            >
              <span className="relative z-10">{siteConfig.email}</span>
              <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 translate-x-[-100%] transition-transform duration-700 group-hover/btn:translate-x-[100%]"
              />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-border glass px-6 text-sm font-medium transition-all duration-300 hover:border-foreground/30 hover:bg-accent/60 cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
