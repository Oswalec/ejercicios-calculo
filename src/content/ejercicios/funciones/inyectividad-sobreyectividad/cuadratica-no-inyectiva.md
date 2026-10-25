---
titulo: "Mostrar que una cuadrática no es inyectiva"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "basico"
metodo: "Contraejemplo"
orden: 2
---

## Enunciado

Demuestra que $f\colon \mathbb{R} \to \mathbb{R}$, $f(x) = x^2 - 2x$, no es inyectiva.

## Solución

1. Para refutar la inyectividad basta un contraejemplo: dos valores distintos con la misma imagen.
2. Buscamos los ceros: $x^2 - 2x = x(x - 2) = 0$, es decir, $x = 0$ o $x = 2$.
3. Entonces $f(0) = 0 = f(2)$ con $0 \neq 2$.
4. Geométricamente, la parábola es simétrica respecto de su eje $x = 1$, y la recta horizontal $y = 0$ la corta dos veces.

**Resultado final:** $f$ no es inyectiva, porque $f(0) = f(2) = 0$.
