import { getCollection, type CollectionEntry } from "astro:content";

export type EntradaEjercicio = CollectionEntry<"ejercicios">;

function porOrden(a: EntradaEjercicio, b: EntradaEjercicio): number {
  return a.data.orden - b.data.orden;
}

export async function ejerciciosDeTema(
  tema: string,
): Promise<EntradaEjercicio[]> {
  const lista = await getCollection(
    "ejercicios",
    (entrada) => entrada.data.tema === tema,
  );
  return lista.sort(porOrden);
}

export async function ejerciciosDeSeccion(
  tema: string,
  seccion: string,
): Promise<EntradaEjercicio[]> {
  const lista = await getCollection(
    "ejercicios",
    (entrada) => entrada.data.tema === tema && entrada.data.seccion === seccion,
  );
  return lista.sort(porOrden);
}
