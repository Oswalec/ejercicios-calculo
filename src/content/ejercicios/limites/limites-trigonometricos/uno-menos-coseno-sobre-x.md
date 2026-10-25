---
titulo: "Límite de (1 − cos x) / x"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "basico"
metodo: "Conjugado trigonométrico e identidad pitagórica"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{0}{0}$. Multiplicamos numerador y denominador por $1 + \cos x$.
2. Por la identidad pitagórica, $(1 - \cos x)(1 + \cos x) = \operatorname{sen}^2 x$, así que la expresión queda $\frac{\operatorname{sen}^2 x}{x(1 + \cos x)}$.
3. La separamos como $\frac{\operatorname{sen} x}{x} \cdot \frac{\operatorname{sen} x}{1 + \cos x}$.
4. El primer factor tiende a $1$ (límite fundamental). El segundo es continuo en $0$ y tiende a $\frac{0}{1 + 1} = 0$.
5. Por el producto de límites: $1 \cdot 0 = 0$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{1 - \cos x}{x} = 0$
