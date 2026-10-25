---
titulo: "Integral definida de un valor absoluto"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "intermedio"
metodo: "Partición del intervalo según el signo"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int_{0}^{3} |x - 1|\,dx$.

## Solución

1. $|x - 1| = 1 - x$ si $x \le 1$, y $|x - 1| = x - 1$ si $x \ge 1$. Partimos el intervalo en $x = 1$.
2. $\int_0^1 (1 - x)\,dx = \left[x - \frac{x^2}{2}\right]_0^1 = \frac{1}{2}$.
3. $\int_1^3 (x - 1)\,dx = \left[\frac{x^2}{2} - x\right]_1^3 = \left(\frac{9}{2} - 3\right) - \left(\frac{1}{2} - 1\right) = \frac{3}{2} + \frac{1}{2} = 2$.
4. Total: $\frac{1}{2} + 2 = \frac{5}{2}$. Son las áreas de dos triángulos, de áreas $\frac{1}{2}$ y $2$.

**Resultado final:** $\displaystyle \int_{0}^{3} |x - 1|\,dx = \frac{5}{2}$
