import { getCollection, type CollectionEntry } from "astro:content";

export type EntradaEjercicio = CollectionEntry<"ejercicios">;

export async function ejerciciosDeTema(
  tema: string,
): Promise<EntradaEjercicio[]> {
  const lista = await getCollection(
    "ejercicios",
    (entrada) => entrada.data.tema === tema,
  );
  return lista.sort((a, b) => a.data.orden - b.data.orden);
}
