---
titulo: "Puntos con recta tangente horizontal"
tema: "derivadas"
seccion: "aplicaciones-geometricas"
dificultad: "intermedio"
metodo: "Ecuación f'(x) = 0"
orden: 5
grafica:
  ubicacion: "solucion"
  x: [-3, 5]
  y: [-30, 12]
  curvas:
    - expr: "x^3 - 3x^2 - 9x + 1"
      etiqueta: 'f(x) = x^3 - 3x^2 - 9x + 1'
    - expr: "6"
      estilo: "referencia"
    - expr: "-26"
      estilo: "referencia"
  puntos:
    - { x: -1, y: 6, etiqueta: "(−1, 6)" }
    - { x: 3, y: -26, etiqueta: "(3, −26)" }
  descripcion: "La cúbica tiene tangentes horizontales (líneas punteadas) en (-1, 6) y en (3, -26)."
---

## Enunciado

Halla los puntos de la gráfica de $f(x) = x^3 - 3x^2 - 9x + 1$ donde la recta tangente es horizontal.

## Solución

1. La tangente es horizontal donde su pendiente es $0$, es decir, donde $f'(x) = 0$.
2. $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$.
3. $f'(x) = 0$ si $x = 3$ o $x = -1$.
4. Ordenadas: $f(3) = 27 - 27 - 27 + 1 = -26$ y $f(-1) = -1 - 3 + 9 + 1 = 6$.

**Resultado final:** Tangente horizontal en $(-1, 6)$ y en $(3, -26)$.
