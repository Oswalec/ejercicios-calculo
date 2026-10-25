---
titulo: "Interpretación geométrica: la derivada como pendiente"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Definición de derivada y ecuación punto-pendiente"
orden: 10
grafica:
  ubicacion: "solucion"
  x: [-1, 6]
  y: [-6, 6]
  curvas:
    - expr: "x^2 - 4x"
      etiqueta: 'f(x) = x^2 - 4x'
    - expr: "2x - 9"
      etiqueta: 'tangente: y = 2x - 9'
      estilo: "secundaria"
  puntos:
    - { x: 3, y: -3, etiqueta: "(3, −3)" }
  descripcion: "La parábola y = x² − 4x y su recta tangente en (3, -3), de pendiente 2."
---

## Enunciado

Sea $f(x) = x^2 - 4x$. Calcula $f'(3)$ por definición e interprétalo geométricamente escribiendo la recta tangente en $x = 3$.

## Solución

1. $f(3) = 9 - 12 = -3$ y $f(3 + h) = (3 + h)^2 - 4(3 + h) = 9 + 6h + h^2 - 12 - 4h = -3 + 2h + h^2$.
2. Cociente: $\frac{f(3 + h) - f(3)}{h} = \frac{2h + h^2}{h} = 2 + h$, que tiende a $2$. Entonces $f'(3) = 2$.
3. Interpretación: $f'(3)$ es la pendiente de la recta tangente a la gráfica en el punto $(3, -3)$.
4. Recta tangente: $y - (-3) = 2(x - 3)$, es decir, $y = 2x - 9$.

**Resultado final:** $f'(3) = 2$; la recta tangente en $(3, -3)$ es $y = 2x - 9$.
