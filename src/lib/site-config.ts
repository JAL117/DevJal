export const siteConfig = {
  name: "José Alberto Morales Solórzano",
  shortName: "Jal",
  role: "Ingeniero de Software · Full-Stack",
  location: "Chiapas, México",
  tagline:
    "Ingeniero de software full-stack. Construyo producto de punta a punta, del prototipo al deploy.",
  email: "jagvms117@gmail.com",
  url: "https://jalmorales.dev",
  socials: {
    github: "https://github.com/JAL117",
    linkedin:
      "https://www.linkedin.com/in/jos%C3%A9-alberto-morales-sol%C3%B3rzano-34abb3249/",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/projects" },
    { label: "Sobre mí", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
