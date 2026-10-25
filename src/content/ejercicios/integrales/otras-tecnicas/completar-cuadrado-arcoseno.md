---
titulo: "Completar el cuadrado bajo una raíz para obtener un arcoseno"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "intermedio"
metodo: "Completación de cuadrados y fórmula del arcoseno"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{\sqrt{3 + 2x - x^2}}$, para $-1 < x < 3$.

## Solución

1. Completamos el cuadrado: $3 + 2x - x^2 = -(x^2 - 2x) + 3 = -\left[(x - 1)^2 - 1\right] + 3 = 4 - (x - 1)^2$.
2. La integral es $\int \frac{dx}{\sqrt{4 - (x - 1)^2}}$. Fórmula: $\int \frac{du}{\sqrt{a^2 - u^2}} = \operatorname{arcsen}\frac{u}{a}$.
3. Con $u = x - 1$ y $a = 2$: $\operatorname{arcsen}\frac{x - 1}{2} + C$.
4. El radicando es positivo exactamente cuando $|x - 1| < 2$, es decir, $-1 < x < 3$.

**Resultado final:** $\displaystyle \int \frac{dx}{\sqrt{3 + 2x - x^2}} = \operatorname{arcsen}\frac{x - 1}{2} + C$
