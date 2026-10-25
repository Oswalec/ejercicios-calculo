---
titulo: "Fracciones parciales con un factor lineal repetido"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "intermedio"
metodo: "Descomposición A/(x − 1) + B/(x − 1)²"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int \frac{x + 3}{(x - 1)^2}\,dx$.

## Solución

1. Con un factor repetido se incluye una fracción por cada potencia: $\frac{x + 3}{(x - 1)^2} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2}$.
2. $x + 3 = A(x - 1) + B$. Con $x = 1$: $B = 4$. Comparando coeficientes de $x$: $A = 1$.
3. $\int\left(\frac{1}{x - 1} + \frac{4}{(x - 1)^2}\right)dx = \ln|x - 1| - \frac{4}{x - 1} + C$.

**Resultado final:** $\displaystyle \int \frac{x + 3}{(x - 1)^2}\,dx = \ln|x - 1| - \frac{4}{x - 1} + C$
