---
titulo: "Volumen de revolución por arandelas"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "intermedio"
metodo: "Método de arandelas: V = π∫(R² − r²) dx"
orden: 7
---

## Enunciado

La región entre $y = x$ e $y = x^2$, para $0 \le x \le 1$, gira alrededor del eje $x$. Calcula el volumen.

## Solución

1. En $[0, 1]$ se cumple $x \ge x^2$: el radio exterior es $R(x) = x$ y el interior es $r(x) = x^2$.
2. Cada sección es una arandela de área $\pi\left(R^2 - r^2\right) = \pi\left(x^2 - x^4\right)$.
3. $V = \pi\int_0^1\left(x^2 - x^4\right)dx = \pi\left(\frac{1}{3} - \frac{1}{5}\right) = \frac{2\pi}{15}$.
4. Ojo: se restan los cuadrados de los radios, $R^2 - r^2$, no el cuadrado de la diferencia $(R - r)^2$.

**Resultado final:** $V = \dfrac{2\pi}{15}$ unidades cúbicas.
