import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Trabajo seleccionado
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Proyectos destacados
          </h2>
        </div>
        <Link
          href="/projects"
          className="group hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex cursor-pointer"
        >
          Ver todos
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {featured.map((project, i) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/70 glass p-6 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_60px_-20px_var(--brand)] cursor-pointer"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand/0 blur-3xl transition-all duration-700 group-hover:bg-brand/20"
              />

              <div className="relative">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono tracking-tight text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(featured.length).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border/70 bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div className="relative mt-8 flex items-end justify-between">
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                  {project.stack.length > 3 ? (
                    <li className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      +{project.stack.length - 3}
                    </li>
                  ) : null}
                </ul>
                <span
                  aria-hidden
                  className="inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand"
                >
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
