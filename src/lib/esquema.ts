import { z } from "astro/zod";
import { SLUGS_TEMAS } from "../data/temas.ts";

export const DIFICULTADES = ["basico", "intermedio", "avanzado"] as const;

const rango = z.tuple([z.number(), z.number()]);

// Gráfica opcional, dibujada desde la fórmula por src/lib/grafica.mjs.
export const esquemaGrafica = z
  .object({
    x: rango,
    y: rango,
    ubicacion: z.enum(["enunciado", "solucion"]).optional(),
    descripcion: z.string().min(1),
    curvas: z
      .array(
        z
          .object({
            expr: z.string().min(1),
            etiqueta: z.string().optional(),
            estilo: z
              .enum(["principal", "secundaria", "referencia"])
              .optional(),
            desde: z.number().optional(),
            hasta: z.number().optional(),
          })
          .strict(),
      )
      .min(1),
    puntos: z
      .array(
        z
          .object({
            x: z.number(),
            y: z.number(),
            etiqueta: z.string().optional(),
            abierto: z.boolean().optional(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict();

export const esquemaEjercicio = z
  .object({
    titulo: z.string().min(1),
    tema: z.enum(SLUGS_TEMAS),
    seccion: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
    dificultad: z.enum(DIFICULTADES),
    metodo: z.string().min(1),
    orden: z.number().int().positive(),
    grafica: esquemaGrafica.optional(),
  })
  .strict();

export type DatosEjercicio = z.infer<typeof esquemaEjercicio>;
