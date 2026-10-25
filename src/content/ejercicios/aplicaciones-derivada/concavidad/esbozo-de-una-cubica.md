---
titulo: "Esbozo de la gráfica de una cúbica"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "intermedio"
metodo: "Interceptos, extremos e inflexión"
orden: 8
grafica:
  ubicacion: "solucion"
  x: [-2.5, 2.5]
  y: [-3.5, 3.5]
  curvas:
    - expr: "x^3 - 3x"
      etiqueta: 'f(x) = x^3 - 3x'
  puntos:
    - { x: -1, y: 2, etiqueta: "máx (−1, 2)" }
    - { x: 1, y: -2, etiqueta: "mín (1, −2)" }
    - { x: 0, y: 0, etiqueta: "inflexión" }
  descripcion: "Cúbica impar con máximo local en (-1, 2), mínimo local en (1, -2) e inflexión en el origen; corta al eje x en 0 y en ±√3."
---

## Enunciado

Esboza la gráfica de $f(x) = x^3 - 3x$ indicando interceptos, extremos locales y punto de inflexión.

## Solución

1. Interceptos: $f(0) = 0$; $x^3 - 3x = x(x^2 - 3) = 0$ da $x = 0$ y $x = \pm\sqrt{3} \approx \pm 1.73$. Además $f$ es impar, así que su gráfica es simétrica respecto del origen.
2. $f'(x) = 3(x - 1)(x + 1)$: crece en $(-\infty, -1)$, decrece en $(-1, 1)$ y crece en $(1, \infty)$. Máximo local $(-1, 2)$ y mínimo local $(1, -2)$.
3. $f''(x) = 6x$: cóncava hacia abajo para $x < 0$ y hacia arriba para $x > 0$. Inflexión en $(0, 0)$.
4. Comportamiento extremo: $f(x) \to -\infty$ cuando $x \to -\infty$ y $f(x) \to +\infty$ cuando $x \to +\infty$.

**Resultado final:** Ceros en $0$ y $\pm\sqrt{3}$; máximo $(-1, 2)$; mínimo $(1, -2)$; inflexión $(0, 0)$.
