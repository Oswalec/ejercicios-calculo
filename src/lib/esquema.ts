import { z } from "astro/zod";
import { SLUGS_TEMAS } from "../data/temas.ts";

export const DIFICULTADES = ["basico", "intermedio", "avanzado"] as const;

export const esquemaEjercicio = z
  .object({
    titulo: z.string().min(1),
    tema: z.enum(SLUGS_TEMAS),
    dificultad: z.enum(DIFICULTADES),
    orden: z.number().int().positive(),
  })
  .strict();

export type DatosEjercicio = z.infer<typeof esquemaEjercicio>;
