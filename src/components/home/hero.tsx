import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40 dark:opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 flex justify-center"
      >
        <div className="animate-blob-1 h-[26rem] w-[48rem] rounded-full bg-brand/25 blur-[140px] dark:bg-brand/30" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10rem] right-[-8rem] -z-10"
      >
        <div className="animate-blob-2 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-[120px] dark:bg-purple-500/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-3 py-1 text-xs text-muted-foreground shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <MapPin className="size-3" aria-hidden />
            <span>{siteConfig.location}</span>
            <span className="text-border">·</span>
            <span className="text-foreground/80">Disponible para proyectos</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-8 max-w-4xl text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.05]">
            Construyo{" "}
            <span className="text-gradient-brand animate-gradient">
              software útil
            </span>
            ,
            <br className="hidden sm:inline" /> de la{" "}
            <span className="italic font-medium text-foreground/90">idea</span>{" "}
            a{" "}
            <span className="italic font-medium text-foreground/90">
              producción
            </span>
            .
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Soy{" "}
            <span className="font-medium text-foreground">
              {siteConfig.name}
            </span>
            {" "}— ingeniero de software full-stack desde Chiapas, México. Me
            interesa más entender bien el problema que encajar un stack de
            moda. Trabajo en{" "}
            <span className="text-foreground/90">web</span>,{" "}
            <span className="text-foreground/90">mobile</span>,{" "}
            <span className="text-foreground/90">backend</span>,{" "}
            <span className="text-foreground/90">datos</span> y{" "}
            <span className="text-foreground/90">agentes de IA</span> — lo que
            el proyecto necesite.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <span className="relative z-10">Ver proyectos</span>
              <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span
                aria-hidden
                className="absolute inset-0 -z-0 bg-gradient-to-r from-brand/0 via-brand/20 to-brand/0 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]"
              />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-border glass px-6 text-sm font-medium transition-all duration-300 hover:border-foreground/30 hover:bg-accent/60 cursor-pointer"
            >
              <Sparkles className="size-3.5 text-brand transition-transform duration-300 group-hover:rotate-12" />
              Contactar
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
