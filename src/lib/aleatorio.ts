export type Aleatorio = () => number;

export const MINIMO = 5;
export const MAXIMO = 10;

export function cantidadAMostrar(total: number, rng: Aleatorio): number {
  if (total <= 0) return 0;
  const n = MINIMO + Math.floor(rng() * (MAXIMO - MINIMO + 1));
  return Math.min(total, n);
}

export function elegirAleatorios(total: number, rng: Aleatorio): number[] {
  const indices = Array.from({ length: Math.max(total, 0) }, (_, i) => i);
  const n = cantidadAMostrar(total, rng);
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(rng() * (indices.length - i));
    const temporal = indices[i] as number;
    indices[i] = indices[j] as number;
    indices[j] = temporal;
  }
  return indices.slice(0, n).sort((a, b) => a - b);
}

export function otroConjunto(
  total: number,
  rng: Aleatorio,
  anterior: readonly number[],
): number[] {
  const clave = anterior.join(",");
  let candidato = elegirAleatorios(total, rng);
  for (
    let intento = 0;
    intento < 20 && total > MINIMO && candidato.join(",") === clave;
    intento++
  ) {
    candidato = elegirAleatorios(total, rng);
  }
  return candidato;
}
