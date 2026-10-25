---
titulo: "Integral definida con fracciones parciales"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "intermedio"
metodo: "Descomposición y regla de Barrow"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int_{2}^{3} \frac{dx}{x^2 - x}$.

## Solución

1. $x^2 - x = x(x - 1)$, y $\frac{1}{x(x - 1)} = \frac{A}{x} + \frac{B}{x - 1}$ con $1 = A(x - 1) + Bx$. Con $x = 0$: $A = -1$; con $x = 1$: $B = 1$.
2. Primitiva: $\ln|x - 1| - \ln|x| = \ln\left|\frac{x - 1}{x}\right|$, válida en $[2, 3]$, donde el integrando es continuo.
3. $\left[\ln\frac{x - 1}{x}\right]_{2}^{3} = \ln\frac{2}{3} - \ln\frac{1}{2} = \ln\frac{4}{3}$.

**Resultado final:** $\displaystyle \int_{2}^{3} \frac{dx}{x^2 - x} = \ln\frac{4}{3}$
