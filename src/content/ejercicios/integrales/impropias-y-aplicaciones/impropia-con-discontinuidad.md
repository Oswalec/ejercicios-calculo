---
titulo: "Integral impropia con discontinuidad en un extremo"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "intermedio"
metodo: "Límite lateral en el extremo de la discontinuidad"
orden: 4
---

## Enunciado

Determina si converge $\displaystyle \int_{0}^{1} \frac{dx}{\sqrt{x}}$ y calcula su valor.

## Solución

1. El integrando no está acotado cerca de $x = 0$ (tiende a $+\infty$): la integral es impropia aunque el intervalo sea finito.
2. Definición: $\int_0^1 \frac{dx}{\sqrt{x}} = \displaystyle \lim_{a \to 0^+}\int_a^1 x^{-1/2}\,dx$.
3. $\int_a^1 x^{-1/2}\,dx = \left[2\sqrt{x}\right]_a^1 = 2 - 2\sqrt{a}$.
4. $\displaystyle \lim_{a \to 0^+}\left(2 - 2\sqrt{a}\right) = 2$. Converge.

**Resultado final:** Converge: $\displaystyle \int_{0}^{1} \frac{dx}{\sqrt{x}} = 2$
