type StackGroup = {
  label: string;
  items: readonly string[];
};

const STACK: readonly StackGroup[] = [
  {
    label: "Frontend",
    items: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    items: ["NestJS", "Fastify", "Node.js", "Prisma", "RabbitMQ", "Socket.io"],
  },
  {
    label: "Data & Infra",
    items: [
      "Supabase",
      "PostgreSQL + RLS",
      "Neon",
      "Vercel",
      "Stripe",
      "WhatsApp Cloud API",
    ],
  },
  {
    label: "IA & Agentes",
    items: [
      "Vercel AI SDK",
      "Claude Skills",
      "MCP",
      "Google Gemini",
      "Prompt caching",
    ],
  },
];

export function StackStrip() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <div className="mb-12">
        <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-8 bg-brand" />
          Stack
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Herramientas con las que construyo
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div
            key={group.label}
            className="group relative overflow-hidden rounded-2xl border border-border/70 glass p-6 transition-all duration-500 hover:border-brand/30 hover:shadow-[0_12px_40px_-12px_var(--brand)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 group-hover:text-brand">
              {group.label}
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-background/60 px-2 py-1 text-[11px] font-medium text-foreground/80 ring-1 ring-inset ring-border/60 transition-colors hover:ring-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
