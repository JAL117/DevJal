import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";

type RouteParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-[20rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px] dark:bg-brand/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] grid-pattern opacity-30 dark:opacity-40"
      />

      <div className="mx-auto max-w-3xl px-5 pt-14 pb-8 sm:px-6 sm:pt-20">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Todos los proyectos
        </Link>

        <header className="mt-12">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
            <span className="h-px w-8 bg-brand" />
            {project.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl">
            {project.hero.headline}
          </h1>
          <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.hero.lede}
          </p>
        </header>

        <dl className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-border/60 glass px-6 py-5 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Año
            </dt>
            <dd className="mt-1.5 font-mono text-sm">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Rol
            </dt>
            <dd className="mt-1.5 text-sm">{project.role}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Stack
            </dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border/70 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {project.highlights && project.highlights.length > 0 ? (
          <ul className="mt-12 grid gap-3 sm:grid-cols-3">
            {project.highlights.map((h) => (
              <li
                key={h.label}
                className="rounded-2xl border border-border/60 glass p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  {h.label}
                </p>
                <p className="mt-2.5 text-sm font-medium leading-relaxed">
                  {h.value}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-20 space-y-16">
          {project.sections.map((section, i) => (
            <section key={section.title} className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {section.title}
                </h2>
              </div>
              <div className="mt-6 space-y-5 pl-10 text-pretty text-[17px] leading-relaxed text-muted-foreground max-w-[65ch]">
                {section.body.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border/60 glass p-6 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_60px_-20px_var(--brand)] cursor-pointer"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand/0 blur-3xl transition-all duration-700 group-hover:bg-brand/20"
          />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Siguiente proyecto
            </p>
            <p className="mt-1.5 text-xl font-semibold tracking-tight transition-colors group-hover:text-brand">
              {nextProject.title}
            </p>
          </div>
          <span
            aria-hidden
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand"
          >
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
