---
titulo: "Fracción impropia: dividir antes de descomponer"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "intermedio"
metodo: "División de polinomios"
orden: 7
---

## Enunciado

Calcula $\displaystyle \int \frac{x^3 + x + 1}{x^2 + 1}\,dx$.

## Solución

1. La fracción es impropia (grado $3 \ge 2$): primero se dividen los polinomios.
2. $x^3 + x + 1 = x\left(x^2 + 1\right) + 1$, así que $\frac{x^3 + x + 1}{x^2 + 1} = x + \frac{1}{x^2 + 1}$.
3. $\int\left(x + \frac{1}{x^2 + 1}\right)dx = \frac{x^2}{2} + \arctan x + C$.

**Resultado final:** $\displaystyle \int \frac{x^3 + x + 1}{x^2 + 1}\,dx = \frac{x^2}{2} + \arctan x + C$
