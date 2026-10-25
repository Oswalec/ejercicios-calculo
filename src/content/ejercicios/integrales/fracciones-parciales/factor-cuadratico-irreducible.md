---
titulo: "Fracciones parciales con un factor cuadrático irreducible"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "intermedio"
metodo: "Descomposición A/x + (Bx + C)/(x² + 1)"
orden: 6
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{x\left(x^2 + 1\right)}$.

## Solución

1. $x^2 + 1$ es irreducible (no tiene raíces reales), así que su numerador debe ser lineal: $\frac{1}{x(x^2 + 1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}$.
2. $1 = A(x^2 + 1) + (Bx + C)x$. Con $x = 0$: $A = 1$. Coeficiente de $x^2$: $A + B = 0$, de donde $B = -1$. Coeficiente de $x$: $C = 0$.
3. $\int\left(\frac{1}{x} - \frac{x}{x^2 + 1}\right)dx = \ln|x| - \frac{1}{2}\ln\left(x^2 + 1\right) + C$, con la sustitución $u = x^2 + 1$ en el segundo término.

**Resultado final:** $\displaystyle \int \frac{dx}{x\left(x^2 + 1\right)} = \ln|x| - \frac{1}{2}\ln\left(x^2 + 1\right) + C$
