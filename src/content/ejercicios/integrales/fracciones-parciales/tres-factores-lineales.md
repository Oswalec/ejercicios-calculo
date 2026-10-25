---
titulo: "Fracciones parciales con tres factores lineales"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "intermedio"
metodo: "Factorización del denominador y valores convenientes"
orden: 3
---

## Enunciado

Calcula $\displaystyle \int \frac{x^2 + 2x - 1}{x^3 - x}\,dx$.

## Solución

1. Factorizamos: $x^3 - x = x(x - 1)(x + 1)$. Planteamos $\frac{A}{x} + \frac{B}{x - 1} + \frac{C}{x + 1}$, es decir, $x^2 + 2x - 1 = A(x - 1)(x + 1) + Bx(x + 1) + Cx(x - 1)$.
2. Con $x = 0$: $-1 = -A$, de donde $A = 1$. Con $x = 1$: $2 = 2B$, de donde $B = 1$. Con $x = -1$: $-2 = 2C$, de donde $C = -1$.
3. $\int\left(\frac{1}{x} + \frac{1}{x - 1} - \frac{1}{x + 1}\right)dx = \ln|x| + \ln|x - 1| - \ln|x + 1| + C$.
4. Se puede escribir como $\ln\left|\frac{x(x - 1)}{x + 1}\right| + C$.

**Resultado final:** $\ln|x| + \ln|x - 1| - \ln|x + 1| + C = \ln\left|\dfrac{x(x - 1)}{x + 1}\right| + C$
