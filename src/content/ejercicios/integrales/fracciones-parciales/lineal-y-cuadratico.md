---
titulo: "Factor lineal y factor cuadrático irreducible"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "avanzado"
metodo: "Descomposición y separación en logaritmo y arcotangente"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int \frac{3x + 1}{(x - 1)\left(x^2 + 1\right)}\,dx$.

## Solución

1. Planteamos $\frac{A}{x - 1} + \frac{Bx + C}{x^2 + 1}$, es decir, $3x + 1 = A\left(x^2 + 1\right) + (Bx + C)(x - 1)$.
2. Con $x = 1$: $4 = 2A$, de donde $A = 2$. Coeficiente de $x^2$: $0 = A + B$, de donde $B = -2$. Término constante: $1 = A - C$, de donde $C = 1$.
3. Separamos: $\frac{2}{x - 1} - \frac{2x}{x^2 + 1} + \frac{1}{x^2 + 1}$.
4. Integramos: $2\ln|x - 1| - \ln\left(x^2 + 1\right) + \arctan x + C$.

**Resultado final:** $\displaystyle \int \frac{3x + 1}{(x - 1)(x^2 + 1)}\,dx = 2\ln|x - 1| - \ln\left(x^2 + 1\right) + \arctan x + C$
