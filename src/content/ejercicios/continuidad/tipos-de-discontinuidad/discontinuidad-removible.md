---
titulo: "Discontinuidad removible en una función racional"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "basico"
metodo: "Factorización y redefinición de la función"
orden: 1
grafica:
  ubicacion: "solucion"
  x: [-2, 6]
  y: [-1, 10]
  curvas:
    - expr: "x + 3"
      etiqueta: 'f(x) = \dfrac{x^2 - 9}{x - 3}'
  puntos:
    - { x: 3, y: 6, etiqueta: "(3, 6)", abierto: true }
  descripcion: "La gráfica es la recta y = x + 3 con un hueco en el punto (3, 6)."
---

## Enunciado

Clasifica la discontinuidad de $f(x) = \dfrac{x^2 - 9}{x - 3}$ en $x = 3$ y, si es posible, elimínala.

## Solución

1. $f(3)$ no está definido, así que $f$ es discontinua en $x = 3$.
2. Calculamos el límite: para $x \neq 3$, $\frac{(x - 3)(x + 3)}{x - 3} = x + 3$, de donde $\displaystyle \lim_{x \to 3} f(x) = 6$.
3. El límite existe y es finito: la discontinuidad es **removible**. En la gráfica aparece como un hueco en $(3, 6)$.
4. Se elimina redefiniendo $f(3) = 6$: la nueva función coincide con $x + 3$ en todo $\mathbb{R}$ y es continua.

**Resultado final:** Discontinuidad removible en $x = 3$; se elimina definiendo $f(3) = 6$.
