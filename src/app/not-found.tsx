import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-6 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[20rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px] animate-blob-1 dark:bg-brand/25"
      />
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
        Error 404
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
        Página{" "}
        <span className="text-gradient-brand animate-gradient">perdida</span>
      </h1>
      <p className="mt-6 max-w-md text-pretty text-lg text-muted-foreground">
        El contenido que buscas no existe o se movió a otra parte. Puedes
        volver al inicio o revisar los proyectos.
      </p>
      <div className="mt-10 flex gap-3">
        <Link
          href="/"
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
        >
          Inicio
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-11 items-center rounded-full border border-border glass px-6 text-sm font-medium transition-all duration-300 hover:border-foreground/30 hover:bg-accent/60 cursor-pointer"
        >
          Ver proyectos
        </Link>
      </div>
    </div>
  );
}
