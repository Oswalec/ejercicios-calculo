import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { esquemaEjercicio } from "./lib/esquema.ts";

const ejercicios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ejercicios" }),
  schema: esquemaEjercicio,
});

export const collections = { ejercicios };
