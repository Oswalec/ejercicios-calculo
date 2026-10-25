---
titulo: "Un hueco con un punto aislado"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "basico"
metodo: "Comparación del límite con el valor de la función"
orden: 7
grafica:
  ubicacion: "solucion"
  x: [-2, 4]
  y: [-1, 6]
  curvas:
    - expr: "x + 1"
      etiqueta: 'y = x + 1\ (x \neq 1)'
  puntos:
    - { x: 1, y: 2, abierto: true }
    - { x: 1, y: 5, etiqueta: "(1, 5)" }
  descripcion: "Recta y = x + 1 con un hueco en (1, 2) y un punto aislado en (1, 5)."
---

## Enunciado

Sea

$$
f(x) = \begin{cases} \dfrac{x^2 - 1}{x - 1}, & x \neq 1 \\ 5, & x = 1 \end{cases}
$$

Describe su gráfica cerca de $x = 1$ y clasifica la discontinuidad.

## Solución

1. Para $x \neq 1$: $\frac{x^2 - 1}{x - 1} = x + 1$. La gráfica es la recta $y = x + 1$, salvo en $x = 1$.
2. $\displaystyle \lim_{x \to 1} f(x) = 2$, pero $f(1) = 5$.
3. En la gráfica se ve un **hueco** en $(1, 2)$ (el valor que «debería» tener) y un **punto aislado** en $(1, 5)$.
4. Como el límite existe y es finito pero no coincide con $f(1)$, la discontinuidad es **removible**: basta redefinir $f(1) = 2$.

**Resultado final:** Discontinuidad removible en $x = 1$: hueco en $(1, 2)$ y punto aislado en $(1, 5)$.
