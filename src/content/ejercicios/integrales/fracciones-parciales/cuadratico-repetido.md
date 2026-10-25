---
titulo: "Fracciones parciales con un factor cuadrático repetido"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "avanzado"
metodo: "Descomposición (Ax + B)/(x² + 1) + (Cx + D)/(x² + 1)²"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int \frac{x^3 + 2x}{\left(x^2 + 1\right)^2}\,dx$.

## Solución

1. Planteamos $\frac{Ax + B}{x^2 + 1} + \frac{Cx + D}{(x^2 + 1)^2}$, es decir, $x^3 + 2x = (Ax + B)(x^2 + 1) + Cx + D$.
2. Comparando coeficientes: $x^3$: $A = 1$; $x^2$: $B = 0$; $x$: $A + C = 2$, de donde $C = 1$; término constante: $B + D = 0$, de donde $D = 0$.
3. El integrando es $\frac{x}{x^2 + 1} + \frac{x}{(x^2 + 1)^2}$. Con $u = x^2 + 1$, $du = 2x\,dx$: $\frac{1}{2}\int\frac{du}{u} + \frac{1}{2}\int\frac{du}{u^2}$.
4. Resultado: $\frac{1}{2}\ln\left(x^2 + 1\right) - \frac{1}{2\left(x^2 + 1\right)} + C$.

**Resultado final:** $\displaystyle \int \frac{x^3 + 2x}{(x^2 + 1)^2}\,dx = \frac{1}{2}\ln\left(x^2 + 1\right) - \frac{1}{2\left(x^2 + 1\right)} + C$
