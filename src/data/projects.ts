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
      "Optimización multi-objetivo de inventario farmacéutico con algoritmos genéticos. Balancea desabasto, caducidad y presupuesto.",
    year: "2025",
    role: "Lead developer",
    stack: [
      "Python",
      "NumPy",
      "pandas",
      "SciPy",
      "Matplotlib",
      "tkinter",
      "Genetic Algorithms",
    ],
    tags: ["Optimización", "Healthcare", "OR / ML"],
    status: "private",
    featured: true,
    hero: {
      eyebrow: "Investigación de operaciones",
      headline:
        "Planes de reposición farmacéutica generados por un algoritmo genético multi-objetivo.",
      lede: "Un sistema de escritorio que, dados inventario y ventas históricas, genera un plan de compra semanal que minimiza rotura de stock y merma por caducidad mientras respeta el presupuesto y la capacidad de almacenamiento.",
    },
    highlights: [
      { label: "Modelado", value: "Medicamento · ItemReposición · Plan" },
      { label: "Solver", value: "GA con 6 penalizaciones" },
      { label: "Demanda", value: "Stock de seguridad 95% servicio" },
    ],
    sections: [
      {
        title: "Contexto",
        body: [
          "Las farmacias independientes manejan cientos de SKUs con demanda variable, fechas de caducidad y restricciones de capital. La reposición manual tiende a sobre-stockear best-sellers y dejar huecos en la cola larga — o, peor, a comprar stock que vence antes de venderse.",
          "El objetivo fue diseñar un sistema que, a partir de histórico de ventas, inventario actual y fechas de caducidad, generara un plan de compra semanal que balanceara disponibilidad, merma y costo simultáneamente.",
        ],
      },
      {
        title: "Modelado del problema",
        body: [
          "Modelé el dominio con tres clases: `Medicamento` (código, costo unitario, caducidad, tiempo de entrega), `ItemDeReposicion` (cuánto pedir y en qué semana) y `PlanDeReposicion` (colección de items candidatos).",
          "La demanda por SKU se agrupa semanalmente usando el calendario ISO de pandas; a partir de ahí calculo promedio y desviación estándar por código. El stock de seguridad sale de la distribución normal inversa con nivel de servicio 95% (`scipy.stats.norm.ppf`).",
          "La función de fitness combina seis penalizaciones: rotura de stock, presupuesto, caducidad, obsolescencia, variación respecto al pedido anterior y almacenamiento. Los pesos son ajustables desde la UI para que el usuario pueda priorizar disponibilidad vs. costo según la temporada.",
        ],
      },
      {
        title: "Interfaz y ejecución",
        body: [
          "Frontend de escritorio en tkinter con tablas interactivas (`pandastable`) para editar inventario y ventas en vivo. La corrida del GA va en un hilo separado comunicándose con la UI por una `queue` de mensajes para no bloquear la ventana.",
          "Los resultados se muestran con `matplotlib`: evolución del fitness por generación, plan de compra final y proyección de stock semana a semana. Exportable a CSV para auditoría.",
        ],
      },
      {
        title: "Lo interesante",
        body: [
          "Lo que más tiempo consumió no fue el algoritmo sino la función de fitness: cada penalización influye de forma diferente según la topología del problema. Con pesos ingenuos el GA converge a planes degenerados (comprar 0 de todo, minimizando costo pero maximizando rotura).",
          "Lección: en optimización aplicada, la modelación del problema pesa más que el solver. Un GA con fitness bien calibrado bate a un solver exacto con fitness mal planteada.",
        ],
      },
    ],
  },
  {
    slug: "kairolink",
    title: "KairoLink",
    summary:
      "Plataforma cross-platform para permanencia estudiantil. Modelo KNN que puntúa riesgo de deserción a partir de 9 indicadores académicos.",
    year: "2025",
    role: "Full-stack developer & ML",
    stack: [
      "React 19",
      "Vite",
      "Material UI",
      "Flutter",
      "Firebase",
      "Python",
      "scikit-learn",
      "Flask",
      "pandas",
      "Axios",
      "Recharts",
    ],
    tags: ["EdTech", "ML aplicado", "Cross-platform"],
    status: "private",
    featured: true,
    hero: {
      eyebrow: "EdTech + ML aplicado",
      headline:
        "Detectar a los estudiantes en riesgo de deserción antes de que sea tarde.",
      lede: "Plataforma cross-platform para gestión educativa con un modelo KNN que puntúa, por alumno, el riesgo de deserción a partir de 9 indicadores académicos. Web en React/MUI para dirección y tutores; app Flutter para captura operativa en el aula; modelo Python expuesto como API Flask.",
    },
    highlights: [
      { label: "Modelo", value: "KNN anomaly detection (k=5)" },
      { label: "Features", value: "9 indicadores académicos" },
      { label: "Entrenamiento", value: "230 estudiantes · jul 2025" },
    ],
    sections: [
      {
        title: "Contexto",
        body: [
          "La deserción estudiantil es un problema que las instituciones suelen detectar tarde — cuando el alumno ya dejó de asistir. KairoLink nació para invertir esa secuencia: usar señales tempranas (asistencia, calificaciones, intervenciones) para identificar riesgo antes de que sea irreversible.",
          "Se diseñó como producto formal con modelo de negocio (Canvas, ficha técnica, resumen ejecutivo) y arquitectura cross-platform: la web es donde se orquesta, el móvil donde se capturan los datos del día a día, y el modelo ML donde se transforma eso en un score accionable.",
        ],
      },
      {
        title: "Pipeline del modelo",
        body: [
          "El EDA inicial sobre encuestas estudiantiles identificó nueve features predictoras: porcentaje de aprobación, promedio general, faltas promedio, ratio de faltas, intervenciones totales, materias repetidas, total de materias cursadas, asistencias promedio y retardos promedio.",
          "El modelo es un KNN de detección de anomalías (k=5) entrenado con scikit-learn sobre 230 estudiantes. Scoring por distancia al vecindario con umbral de anomalía calibrado al percentil 85 — devuelve score continuo y categoría de riesgo, no solo binario.",
          "El modelo vive detrás de una API Flask (`/predict`, `/health`) con el modelo persistido (`joblib`), escalador previo y parámetros en JSON versionado. Web y móvil consumen predicciones por HTTP; la respuesta incluye matrícula, score de anomalía, porcentaje de riesgo, categoría y timestamp.",
        ],
      },
      {
        title: "Arquitectura cross-platform",
        body: [
          "Web en React 19 + Vite + Material UI, organizada feature-first por rol (`auth`, `director`, `docente`, `tutor`). Dirección ve la foto global con Recharts; docentes capturan calificaciones con validaciones y evidencias (react-dropzone); tutores monitorean tutorados y registran intervenciones.",
          "App móvil en Flutter + Firebase, mismo patrón feature-first (`attendance`, `auth`, `home`, `interventions`, `profile`). Diseñada para uso en el aula: pase de lista offline-first y sync cuando hay red, consulta rápida entre clases, notificación de intervenciones.",
        ],
      },
      {
        title: "Honestidad sobre el modelo",
        body: [
          "Métricas reales del KNN: precisión 0.80, recall 0.26, F1 0.39. Traducción: cuando el modelo marca a alguien como riesgo, acierta 8 de cada 10 veces — pero se le escapan la mayoría de los verdaderos positivos.",
          "Es un modelo conservador, útil como señal temprana pero no como decisor único. Las siguientes iteraciones apuntan a: (1) subir el tamaño de muestra más allá de los 230 alumnos, (2) añadir features sociodemográficos y de comportamiento, (3) probar enfoques supervisados (Random Forest, Gradient Boosting) sobre el mismo dataset.",
          "El valor del proyecto no estuvo en perseguir F1 alto sino en demostrar el pipeline end-to-end: EDA → feature engineering → modelo → API → UI → decisión de tutor. La métrica se mejora después; la arquitectura hay que dejarla pensada desde el inicio.",
        ],
      },
    ],
  },
  {
    slug: "cacei",
    title: "Sistema CACEI",
    summary:
      "Plataforma integral de gestión educativa multi-rol con microservicios y auditoría de seguridad contra OWASP ASVS 4.0.3 nivel 2.",
    year: "2025",
    role: "Lead developer",
    stack: [
      "React 19",
      "Material UI",
      "Vite",
      "Node.js",
      "TypeScript",
      "Express",
      "MySQL",
      "TypeORM",
      "sweetalert2",
    ],
    tags: ["EdTech", "Enterprise", "Seguridad"],
    status: "private",
    featured: true,
    hero: {
      eyebrow: "Gestión educativa + seguridad formal",
      headline:
        "Una plataforma académica diseñada contra el estándar OWASP ASVS 4.0.3 nivel 2.",
      lede: "Sistema multi-rol para gestión integral universitaria — matrícula, grupos, calificaciones, planeación académica — construido con arquitectura de microservicios y sometido a una evaluación formal de cumplimiento OWASP ASVS 4.0.3 nivel 2 como parte del proceso de acreditación CACEI.",
    },
    highlights: [
      { label: "Seguridad", value: "OWASP ASVS 4.0.3 Level 2" },
      { label: "Backend", value: "Microservicios Node.js / TypeScript" },
      { label: "Datos", value: "MySQL + TypeORM" },
    ],
    sections: [
      {
        title: "Contexto",
        body: [
          "CACEI es el organismo que acredita programas de ingeniería en México. Parte del proceso exige evidencia tanto académica (programas, carga, evaluaciones) como de prácticas de desarrollo de software seguro en los sistemas de la institución.",
          "El sistema nació para centralizar ambas cosas: ser la plataforma diaria de dirección, docentes y tutores, y a la vez servir como evidencia documentada de buenas prácticas de seguridad ante el organismo evaluador.",
        ],
      },
      {
        title: "Arquitectura",
        body: [
          "Frontend en React 19 + Vite + Material UI organizado feature-first por rol (director, docente, tutor, auth). Stores locales por feature, router v7 con lazy loading, formularios con validaciones centralizadas.",
          "Backend como microservicios Node.js/TypeScript con Express y TypeORM sobre MySQL. RBAC estricto por rol, con cada servicio responsable de una parte del dominio (matrícula, calificaciones, reportes, etc.).",
          "Comunicación cliente-servidor vía REST con axios, manejo de errores centralizado y feedback visual con sweetalert2.",
        ],
      },
      {
        title: "Seguridad formal",
        body: [
          "Elaboré una evaluación de cumplimiento contra OWASP ASVS 4.0.3 (Application Security Verification Standard) nivel 2 — verificación estándar — cubriendo arquitectura, autenticación, control de acceso, validación de entradas, criptografía, manejo de errores y logging.",
          "Validaciones académicas centralizadas en un módulo compartido: calificaciones (0–100), ponderación de actividades (1–100%), créditos (1–12), horas semanales (1–40), edad estudiantil (15–65). Cada regla con mensajes de error específicos y cobertura en tests.",
        ],
      },
      {
        title: "Lo que aprendí",
        body: [
          "Documentar el sistema contra un estándar formal obliga a hacer explícitas decisiones que normalmente quedan implícitas: ¿cómo manejamos sesiones? ¿qué tan largo es el password? ¿dónde está documentado el modelo de amenazas?",
          "El ejercicio subió la calidad del código más que cualquier refactor, porque cada requerimiento no cumplido se convierte en un ticket concreto. Recomendable para cualquier proyecto con stakeholders institucionales.",
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
