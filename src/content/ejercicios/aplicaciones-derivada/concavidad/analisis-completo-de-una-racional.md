---
titulo: "Análisis completo de una función racional"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "avanzado"
metodo: "Dominio, simetría, asíntotas, primera y segunda derivada"
orden: 7
grafica:
  ubicacion: "solucion"
  x: [-4, 4]
  y: [-5, 5]
  curvas:
    - expr: "x^2/(x^2 - 1)"
      etiqueta: 'f(x) = \dfrac{x^2}{x^2 - 1}'
    - expr: "1"
      estilo: "referencia"
  puntos:
    - { x: 0, y: 0, etiqueta: "(0, 0)" }
  descripcion: "Tres ramas separadas por las asíntotas verticales x = -1 y x = 1, con asíntota horizontal y = 1 (punteada) y máximo local en el origen."
---

## Enunciado

Haz el análisis completo de $f(x) = \dfrac{x^2}{x^2 - 1}$: dominio, simetría, asíntotas, crecimiento, extremos y concavidad.

## Solución

1. Dominio: $\mathbb{R} \setminus \{-1, 1\}$. Como $f(-x) = f(x)$, es par (simétrica respecto del eje $y$). Corta los ejes solo en $(0, 0)$.
2. Asíntotas: verticales $x = \pm 1$ (numerador $1 \neq 0$ y denominador $0$); horizontal $y = 1$, porque $\displaystyle \lim_{x \to \pm\infty} f(x) = 1$.
3. $f'(x) = \frac{2x(x^2 - 1) - x^2 \cdot 2x}{(x^2 - 1)^2} = \frac{-2x}{(x^2 - 1)^2}$. Positiva para $x < 0$ y negativa para $x > 0$ (fuera de $\pm 1$): crece en $(-\infty, -1)$ y $(-1, 0)$, decrece en $(0, 1)$ y $(1, \infty)$. Máximo local en $(0, 0)$.
4. $f''(x) = \frac{6x^2 + 2}{(x^2 - 1)^3}$. El numerador es siempre positivo; el signo lo da $(x^2 - 1)^3$: cóncava hacia arriba para $|x| > 1$ y hacia abajo para $|x| < 1$.
5. No hay puntos de inflexión: la concavidad cambia en $x = \pm 1$, pero esos puntos no pertenecen al dominio.

**Resultado final:** Par; asíntotas $x = \pm 1$ e $y = 1$; máximo local $(0, 0)$; cóncava hacia abajo en $(-1, 1)$ y hacia arriba en $|x| > 1$; sin puntos de inflexión.
