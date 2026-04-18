export type ProjectStatus = "live" | "archived" | "private";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  stack: readonly string[];
  tags: readonly string[];
  status: ProjectStatus;
  featured: boolean;
  links?: {
    demo?: string;
    repo?: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    lede: string;
  };
  sections: readonly {
    title: string;
    body: readonly string[];
  }[];
  highlights?: readonly {
    label: string;
    value: string;
  }[];
};

export const projects: readonly Project[] = [
  {
    slug: "pharmaoptigen",
    title: "PharmaOptiGen",
    summary:
      "Sistema inteligente de optimización de inventario farmacéutico con algoritmos genéticos.",
    year: "2025",
    role: "Lead developer",
    stack: ["Python", "Genetic Algorithms", "pandas", "Flask"],
    tags: ["ML/Optimization", "Healthcare", "Academic"],
    status: "private",
    featured: true,
    hero: {
      eyebrow: "Optimización inteligente",
      headline:
        "Menos desabasto, menos caducidad: inventario farmacéutico optimizado por algoritmos genéticos.",
      lede: "Un sistema que modela la reposición de medicamentos como un problema de optimización multi-objetivo y lo resuelve con algoritmos genéticos, balanceando disponibilidad, caducidad y costo de compra.",
    },
    highlights: [
      { label: "Problema", value: "Reposición manual ineficiente" },
      { label: "Enfoque", value: "GA multi-objetivo" },
      { label: "Output", value: "Plan de compra semanal" },
    ],
    sections: [
      {
        title: "Contexto",
        body: [
          "Las farmacias independientes manejan cientos de SKUs con demanda estacional, fechas de caducidad y restricciones de capital. La reposición manual tiende a sobre-stockear best-sellers y dejar huecos en la cola larga.",
          "El objetivo era diseñar un sistema que, dado histórico de ventas, niveles actuales e información de caducidad, generara un plan de compra semanal que minimizara desabasto y merma simultáneamente.",
        ],
      },
      {
        title: "Enfoque técnico",
        body: [
          "Modelé el problema como optimización multi-objetivo: minimizar costo total de compra, minimizar unidades con riesgo de caducidad, y maximizar cobertura esperada de demanda.",
          "Usé un algoritmo genético con codificación entera (unidades a pedir por SKU), selección por torneo, cruce de un punto y mutación gaussiana acotada. La función de fitness combina los tres objetivos con pesos calibrados contra datos históricos.",
          "Validación con walk-forward sobre ventas de un año para medir robustez fuera de muestra.",
        ],
      },
      {
        title: "Resultado y aprendizajes",
        body: [
          "Generé planes de compra que, en simulación, reducían merma por caducidad vs. la heurística de reposición fija y mejoraban cobertura en SKUs de cola larga.",
          "Lo más interesante no fue el algoritmo sino la función de fitness: ajustar pesos entre los tres objetivos cambia radicalmente el comportamiento del sistema. Lección: en optimización aplicada, la modelación del problema pesa más que el solver.",
        ],
      },
    ],
  },
  {
    slug: "kairolink",
    title: "KairoLink",
    summary:
      "Plataforma educativa con predicción de deserción estudiantil vía KNN.",
    year: "2025",
    role: "Full-stack developer",
    stack: ["React", "Flutter", "Firebase", "KNN", "scikit-learn"],
    tags: ["EdTech", "ML applied"],
    status: "private",
    featured: true,
    hero: {
      eyebrow: "EdTech + ML",
      headline: "Detectar deserción estudiantil antes de que suceda.",
      lede: "Plataforma web + mobile para seguimiento académico con un modelo KNN que predice riesgo de abandono a partir de patrones de asistencia, calificaciones y engagement.",
    },
    sections: [
      {
        title: "Idea",
        body: [
          "Caso de estudio pendiente de detallar. Pídeme que lo amplíe cuando quiera priorizarlo.",
        ],
      },
    ],
  },
  {
    slug: "cacei",
    title: "Sistema CACEI",
    summary:
      "Plataforma de acreditación universitaria para Universidad Politécnica de Chiapas.",
    year: "2025",
    role: "Lead developer",
    stack: ["React", "Material UI", "Node.js"],
    tags: ["EdTech", "Enterprise"],
    status: "private",
    featured: true,
    hero: {
      eyebrow: "Acreditación universitaria",
      headline:
        "Digitalizar el proceso de acreditación CACEI de una universidad.",
      lede: "Plataforma multi-rol para capturar, validar y auditar la evidencia requerida por el proceso de acreditación CACEI, reemplazando un flujo basado en archivos compartidos.",
    },
    sections: [
      {
        title: "Idea",
        body: [
          "Caso de estudio pendiente de detallar. Pídeme que lo amplíe cuando quiera priorizarlo.",
        ],
      },
    ],
  },
] as const;

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): readonly string[] {
  return projects.map((p) => p.slug);
}
