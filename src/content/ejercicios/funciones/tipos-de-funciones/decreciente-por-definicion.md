---
titulo: "Función decreciente demostrada por definición"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "intermedio"
metodo: "Definición de función decreciente"
orden: 6
---

## Enunciado

Demuestra que $f(x) = \dfrac{1}{x}$ es decreciente en el intervalo $(0, \infty)$.

## Solución

1. Definición: $f$ es decreciente en $I$ si para todo $x_1, x_2 \in I$ con $x_1 < x_2$ se cumple $f(x_1) > f(x_2)$.
2. Sean $0 < x_1 < x_2$. Calculamos la diferencia: $f(x_1) - f(x_2) = \frac{1}{x_1} - \frac{1}{x_2} = \frac{x_2 - x_1}{x_1 x_2}$.
3. El numerador $x_2 - x_1$ es positivo, y el denominador $x_1 x_2$ también, por ser producto de positivos.
4. Entonces $f(x_1) - f(x_2) > 0$, es decir, $f(x_1) > f(x_2)$.

**Resultado final:** $f(x) = \dfrac{1}{x}$ es decreciente en $(0, \infty)$.
