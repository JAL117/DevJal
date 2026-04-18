import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos seleccionados. Web, mobile, ML aplicado, agentes de IA y sistemas distribuidos — una muestra de en qué me he metido.",
};

export default function ProjectsPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] grid-pattern opacity-40 dark:opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-[22rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] dark:bg-brand/25"
      />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Proyectos
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Trabajo{" "}
            <span className="text-gradient-brand animate-gradient">
              seleccionado
            </span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Piezas variadas en las que me tocó liderar el diseño técnico o
            resolver la parte más interesante del problema — web, mobile,
            datos, IA y sistemas distribuidos.
          </p>
        </div>

        <ul className="mt-20 divide-y divide-border/50 border-y border-border/50">
          {projects.map((project, i) => (
            <li key={project.slug} className="group">
              <Link
                href={`/projects/${project.slug}`}
                className="relative grid grid-cols-[auto_1fr_auto] items-baseline gap-6 px-4 py-8 transition-all duration-500 hover:bg-accent/30 cursor-pointer"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                      {project.title}
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      · {project.year}
                    </span>
                    <span className="hidden text-xs text-muted-foreground sm:inline">
                      {project.tags.join(" · ")}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <ArrowUpRight className="size-6 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
