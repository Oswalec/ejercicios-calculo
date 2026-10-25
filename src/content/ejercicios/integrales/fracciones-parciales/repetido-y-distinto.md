---
titulo: "Factor repetido x² junto a un factor distinto"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "intermedio"
metodo: "Descomposición A/x + B/x² + C/(x + 1)"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{x^2(x + 1)}$.

## Solución

1. Planteamos $\frac{1}{x^2(x + 1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x + 1}$, es decir, $1 = Ax(x + 1) + B(x + 1) + Cx^2$.
2. Con $x = 0$: $B = 1$. Con $x = -1$: $C = 1$. Coeficiente de $x^2$: $A + C = 0$, de donde $A = -1$.
3. $\int\left(-\frac{1}{x} + \frac{1}{x^2} + \frac{1}{x + 1}\right)dx = -\ln|x| - \frac{1}{x} + \ln|x + 1| + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{x^2(x + 1)} = \ln\left|\frac{x + 1}{x}\right| - \frac{1}{x} + C$
