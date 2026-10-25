---
titulo: "Intervalos de crecimiento y decrecimiento"
tema: "aplicaciones-derivada"
seccion: "crecimiento"
dificultad: "basico"
metodo: "Signo de la primera derivada"
orden: 1
grafica:
  ubicacion: "solucion"
  x: [-2.5, 2.5]
  y: [-3, 3]
  curvas:
    - expr: "x^3 - 3x"
      etiqueta: 'f(x) = x^3 - 3x'
  puntos:
    - { x: -1, y: 2, etiqueta: "(−1, 2)" }
    - { x: 1, y: -2, etiqueta: "(1, −2)" }
  descripcion: "La cúbica sube hasta (-1, 2), baja hasta (1, -2) y vuelve a subir."
---

## Enunciado

Determina los intervalos de crecimiento y decrecimiento de $f(x) = x^3 - 3x$.

## Solución

1. Criterio: si $f'(x) > 0$ en un intervalo, $f$ es creciente allí; si $f'(x) < 0$, es decreciente.
2. $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$, que se anula en $x = -1$ y en $x = 1$.
3. Signo de $f'$: positivo en $(-\infty, -1)$, negativo en $(-1, 1)$ y positivo en $(1, \infty)$.
4. Por lo tanto, $f$ crece, decrece y vuelve a crecer en esos intervalos.

**Resultado final:** Creciente en $(-\infty, -1)$ y $(1, \infty)$; decreciente en $(-1, 1)$.
