---
titulo: "Una cuadrática como transformación de x²"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "intermedio"
metodo: "Completación de cuadrados"
orden: 10
grafica:
  ubicacion: "solucion"
  x: [-2, 6]
  y: [-6, 8]
  curvas:
    - expr: "x^2"
      etiqueta: 'y = x^2'
      estilo: "referencia"
    - expr: "2x^2 - 12x + 13"
      etiqueta: 'f(x) = 2(x - 3)^2 - 5'
  puntos:
    - { x: 3, y: -5, etiqueta: "(3, −5)" }
  descripcion: "f es la parábola y = x² desplazada 3 a la derecha, estirada verticalmente al doble y bajada 5 unidades, con vértice en (3, -5)."
---

## Enunciado

Escribe $f(x) = 2x^2 - 12x + 13$ como transformación de $y = x^2$ y describe las transformaciones.

## Solución

1. Factorizamos el coeficiente principal en los términos con $x$: $f(x) = 2(x^2 - 6x) + 13$.
2. Completamos cuadrados: $x^2 - 6x = (x - 3)^2 - 9$. Entonces $f(x) = 2(x - 3)^2 - 18 + 13 = 2(x - 3)^2 - 5$.
3. A partir de $x^2$: traslación de $3$ unidades a la derecha, estiramiento vertical de factor $2$ y traslación de $5$ unidades hacia abajo.
4. Vértice: $(3, -5)$. Comprobación: $f(3) = 18 - 36 + 13 = -5$.

**Resultado final:** $f(x) = 2(x - 3)^2 - 5$: derecha $3$, estiramiento vertical $\times 2$ y abajo $5$; vértice $(3, -5)$.
