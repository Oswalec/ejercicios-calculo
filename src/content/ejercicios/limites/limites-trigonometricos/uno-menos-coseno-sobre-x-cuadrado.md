---
titulo: "Límite de (1 − cos x) / x²"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "intermedio"
metodo: "Conjugado trigonométrico e identidad pitagórica"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{0}{0}$. Multiplicamos numerador y denominador por $1 + \cos x$, que es positivo cerca de $0$.
2. Por la identidad pitagórica, $(1 - \cos x)(1 + \cos x) = 1 - \cos^2 x = \operatorname{sen}^2 x$.
3. La expresión queda $\frac{\operatorname{sen}^2 x}{x^2(1 + \cos x)} = \left(\frac{\operatorname{sen} x}{x}\right)^2 \cdot \frac{1}{1 + \cos x}$.
4. Con $\displaystyle \lim_{x \to 0} \frac{\operatorname{sen} x}{x} = 1$ y la continuidad del coseno: $1^2 \cdot \frac{1}{1 + 1} = \frac{1}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$
