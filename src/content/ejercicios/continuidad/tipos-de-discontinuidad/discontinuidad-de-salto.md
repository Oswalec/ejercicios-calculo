---
titulo: "Discontinuidad de salto"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "basico"
metodo: "Límites laterales finitos y distintos"
orden: 2
grafica:
  ubicacion: "solucion"
  x: [-2, 4]
  y: [-1, 8]
  curvas:
    - expr: "x + 1"
      hasta: 1
      etiqueta: 'y = x + 1\ (x < 1)'
    - expr: "x + 3"
      desde: 1
      etiqueta: 'y = x + 3\ (x \ge 1)'
      estilo: "principal"
  puntos:
    - { x: 1, y: 2, abierto: true }
    - { x: 1, y: 4, etiqueta: "(1, 4)" }
  descripcion: "Dos semirrectas: a la izquierda de x = 1 llega a 2 sin alcanzarlo (hueco) y a la derecha empieza en (1, 4). Hay un salto de 2 unidades."
---

## Enunciado

Clasifica la discontinuidad en $x = 1$ de

$$
f(x) = \begin{cases} x + 1, & x < 1 \\ x + 3, & x \ge 1 \end{cases}
$$

## Solución

1. $f(1) = 1 + 3 = 4$.
2. Por la izquierda: $\displaystyle \lim_{x \to 1^-} (x + 1) = 2$. Por la derecha: $\displaystyle \lim_{x \to 1^+} (x + 3) = 4$.
3. Ambos límites laterales son finitos pero distintos: el límite bilateral no existe y la discontinuidad es **de salto**.
4. La magnitud del salto es $4 - 2 = 2$. Ninguna redefinición de $f(1)$ la elimina.

**Resultado final:** Discontinuidad de salto en $x = 1$, de magnitud $2$.
