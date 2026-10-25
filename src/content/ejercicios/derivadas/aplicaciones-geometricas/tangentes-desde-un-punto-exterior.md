---
titulo: "Rectas tangentes trazadas desde un punto exterior"
tema: "derivadas"
seccion: "aplicaciones-geometricas"
dificultad: "avanzado"
metodo: "Punto de tangencia genérico y condición de paso por el punto"
orden: 9
grafica:
  ubicacion: "solucion"
  x: [-3, 5]
  y: [-5, 12]
  curvas:
    - expr: "x^2"
      etiqueta: 'y = x^2'
    - expr: "6x - 9"
      etiqueta: 'y = 6x - 9'
      estilo: "secundaria"
    - expr: "-2x - 1"
      etiqueta: 'y = -2x - 1'
      estilo: "secundaria"
  puntos:
    - { x: 1, y: -3, etiqueta: "(1, −3)" }
    - { x: 3, y: 9, etiqueta: "(3, 9)" }
    - { x: -1, y: 1, etiqueta: "(−1, 1)" }
  descripcion: "Desde el punto (1, -3), situado debajo de la parábola, salen dos rectas tangentes que la tocan en (3, 9) y en (-1, 1)."
---

## Enunciado

Halla las rectas tangentes a la parábola $y = x^2$ que pasan por el punto $(1, -3)$, que no está sobre la parábola.

## Solución

1. Sea $(a, a^2)$ el punto de tangencia. La tangente allí tiene pendiente $2a$: $y - a^2 = 2a(x - a)$.
2. Exigimos que pase por $(1, -3)$: $-3 - a^2 = 2a(1 - a) = 2a - 2a^2$.
3. Reordenamos: $a^2 - 2a - 3 = 0$, es decir, $(a - 3)(a + 1) = 0$, de donde $a = 3$ o $a = -1$.
4. Con $a = 3$: $y - 9 = 6(x - 3)$, es decir, $y = 6x - 9$. Con $a = -1$: $y - 1 = -2(x + 1)$, es decir, $y = -2x - 1$.
5. Comprobación: en $x = 1$, ambas dan $y = -3$.

**Resultado final:** $y = 6x - 9$ (tangente en $(3, 9)$) e $y = -2x - 1$ (tangente en $(-1, 1)$).
