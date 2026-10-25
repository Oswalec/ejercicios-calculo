---
titulo: "Integral definida como límite de sumas de Riemann"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "avanzado"
metodo: "Sumas de Riemann por la derecha y fórmula de Σk²"
orden: 3
---

## Enunciado

Calcula $\displaystyle \int_{0}^{2} x^2\,dx$ como límite de sumas de Riemann por la derecha.

## Solución

1. Dividimos $[0, 2]$ en $n$ subintervalos iguales: $\Delta x = \frac{2}{n}$ y $x_k = \frac{2k}{n}$, para $k = 1, \ldots, n$.
2. Suma de Riemann por la derecha: $R_n = \sum_{k=1}^{n} f(x_k)\Delta x = \sum_{k=1}^{n} \frac{4k^2}{n^2} \cdot \frac{2}{n} = \frac{8}{n^3}\sum_{k=1}^{n} k^2$.
3. Con $\sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}$: $R_n = \frac{8}{n^3} \cdot \frac{n(n + 1)(2n + 1)}{6} = \frac{4}{3}\left(1 + \frac{1}{n}\right)\left(2 + \frac{1}{n}\right)$.
4. Cuando $n \to \infty$: $\frac{4}{3} \cdot 1 \cdot 2 = \frac{8}{3}$. Coincide con la regla de Barrow: $\left[\frac{x^3}{3}\right]_{0}^{2} = \frac{8}{3}$.

**Resultado final:** $\displaystyle \int_{0}^{2} x^2\,dx = \lim_{n \to \infty} R_n = \frac{8}{3}$
