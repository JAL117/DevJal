import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Ingeniero de software full-stack. Construyo producto end-to-end y me adapto al problema.",
};

const TIMELINE = [
  {
    when: "2026 — Actualidad",
    where: "1to1.ai · Remoto",
    role: "Ingeniero de Software Full-Stack",
    blurb:
      "Desarrollo principal de plataforma SaaS multi-tenant de agentes de IA con mensajería tipo WhatsApp. Orquestación multi-LLM con Vercel AI SDK, Claude Skills y MCP. Microservicios NestJS/Fastify, realtime con Supabase y Socket.io.",
  },
  {
    when: "Sep – Dic 2025",
    where: "Neurotry · Prácticas Profesionales",
    role: "Ingeniero de Software",
    blurb:
      "Sistema de gestión de deudas con IA sobre Next.js, PostgreSQL y Google Gemini. Bot conversacional de WhatsApp con NLP. Testing E2E con 87.5% de cobertura.",
  },
  {
    when: "Mar – Ago 2025",
    where: "Freelance",
    role: "Líder de proyecto & full-stack",
    blurb:
      "Modelo predictivo de calidad del café. App web React para recolección de datos, EDA y dashboard de resultados para stakeholders.",
  },
  {
    when: "2022 – 2025",
    where: "Universidad Politécnica de Chiapas",
    role: "Ing. en Software",
    blurb:
      "Fundamentos de arquitectura de software, sistemas distribuidos, ML aplicado, y los primeros proyectos con impacto social (CACEI, KairoLink, PharmaOptiGen).",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-[22rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] dark:bg-brand/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] grid-pattern opacity-30 dark:opacity-40"
      />

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-28 sm:pt-32">
        <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-8 bg-brand" />
          Sobre mí
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight leading-[1.1] sm:text-6xl">
          Ingeniero de{" "}
          <span className="text-gradient-brand animate-gradient">software</span>{" "}
          desde Chiapas.
        </h1>

        <div className="mt-10 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            Soy ingeniero de software full-stack. Me gusta construir producto
            de punta a punta — del formulario pensado al sistema que procesa
            miles de eventos por segundo. Me interesa más entender bien el
            problema que escoger el stack de moda.
          </p>
          <p>
            He trabajado en web, mobile, datos, ML aplicado y agentes de IA.
            Me muevo principalmente entre TypeScript y Python. Me gusta
            razonar el problema antes de tocar el teclado y, cuando toco,
            dejar código que el equipo pueda leer dentro de seis meses sin
            pedir arqueología.
          </p>
          <p>
            Cuando no estoy construyendo, aprendo sobre algoritmos de
            optimización, leo sobre diseño de sistemas, o ayudo a algún
            microemprendimiento local a digitalizar algo que aún se hace en
            papel.
          </p>
        </div>

        <h2 className="mt-20 text-2xl font-semibold tracking-tight sm:text-3xl">
          Trayectoria
        </h2>
        <ol className="mt-10 space-y-10 border-l border-border/60 pl-8">
          {TIMELINE.map((item) => (
            <li key={item.where} className="relative">
              <span
                aria-hidden
                className="absolute -left-[41px] top-2 flex size-3 items-center justify-center rounded-full bg-brand ring-4 ring-background"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/50 opacity-60" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {item.when}
              </p>
              <p className="mt-2 font-semibold tracking-tight">
                {item.role}{" "}
                <span className="font-normal text-muted-foreground">
                  · {item.where}
                </span>
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.blurb}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="mt-20 text-2xl font-semibold tracking-tight sm:text-3xl">
          Contacto
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          Si quieres platicar sobre un proyecto, una idea, o algún fragmento de
          código que te interese,{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-brand underline-offset-4 transition-all hover:underline"
          >
            escríbeme a {siteConfig.email}
          </a>
          . Respondo rápido.
        </p>
      </div>
    </div>
  );
}
