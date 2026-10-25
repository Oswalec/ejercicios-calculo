---
titulo: "Función acotada dividida entre x"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "basico"
metodo: "Teorema del encaje"
orden: 7
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{\operatorname{sen} x}{x}
$$

## Solución

1. El seno no tiene límite cuando $x \to \infty$ (oscila entre $-1$ y $1$), así que no se puede aplicar la propiedad del cociente. Pero es una función acotada.
2. Para todo $x$: $-1 \le \operatorname{sen} x \le 1$. Dividiendo entre $x > 0$ (no cambia el sentido de las desigualdades): $-\frac{1}{x} \le \frac{\operatorname{sen} x}{x} \le \frac{1}{x}$.
3. Las cotas cumplen $\displaystyle \lim_{x \to \infty} \left(-\frac{1}{x}\right) = 0$ y $\displaystyle \lim_{x \to \infty} \frac{1}{x} = 0$.
4. Por el teorema del encaje, $\displaystyle \lim_{x \to \infty} \frac{\operatorname{sen} x}{x} = 0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{\operatorname{sen} x}{x} = 0$
