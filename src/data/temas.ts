export const SLUGS_TEMAS = ["limites", "derivadas", "integrales"] as const;

export type SlugTema = (typeof SLUGS_TEMAS)[number];

export interface Tema {
  slug: SlugTema;
  nombre: string;
  descripcion: string;
  orden: number;
}

export const temas: readonly Tema[] = [
  {
    slug: "limites",
    nombre: "Límites",
    descripcion:
      "Sustitución directa, indeterminaciones 0/0, límites al infinito, límites notables y continuidad.",
    orden: 1,
  },
  {
    slug: "derivadas",
    nombre: "Derivadas",
    descripcion:
      "Reglas de derivación, regla de la cadena, derivación implícita, recta tangente y razones de cambio.",
    orden: 2,
  },
  {
    slug: "integrales",
    nombre: "Integrales",
    descripcion:
      "Integrales inmediatas, cambio de variable, por partes, fracciones parciales, integral definida y áreas.",
    orden: 3,
  },
];

export function buscarTema(slug: string): Tema | undefined {
  return temas.find((tema) => tema.slug === slug);
}
