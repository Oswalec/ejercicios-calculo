---
titulo: "Fracciones parciales con dos factores lineales"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "basico"
metodo: "Descomposición A/(x − a) + B/(x − b) por valores convenientes"
orden: 2
---

## Enunciado

Calcula $\displaystyle \int \frac{5x - 1}{(x + 1)(x - 2)}\,dx$.

## Solución

1. La fracción es propia (grado $1 < 2$). Planteamos $\frac{5x - 1}{(x + 1)(x - 2)} = \frac{A}{x + 1} + \frac{B}{x - 2}$, es decir, $5x - 1 = A(x - 2) + B(x + 1)$.
2. Con $x = 2$: $9 = 3B$, de donde $B = 3$. Con $x = -1$: $-6 = -3A$, de donde $A = 2$.
3. $\int\left(\frac{2}{x + 1} + \frac{3}{x - 2}\right)dx = 2\ln|x + 1| + 3\ln|x - 2| + C$.

**Resultado final:** $\displaystyle \int \frac{5x - 1}{(x + 1)(x - 2)}\,dx = 2\ln|x + 1| + 3\ln|x - 2| + C$
