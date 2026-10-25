---
titulo: "Cambio de variable cuando x tiende a π"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "intermedio"
metodo: "Cambio de variable e identidad de reducción"
orden: 7
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \pi} \frac{\operatorname{sen} x}{x - \pi}
$$

## Solución

1. Al sustituir $x = \pi$ se obtiene $\frac{0}{0}$. El límite fundamental requiere que el argumento tienda a $0$, así que hacemos $t = x - \pi$. Cuando $x \to \pi$, $t \to 0$.
2. Entonces $x = t + \pi$ y, por la fórmula del seno de una suma, $\operatorname{sen}(t + \pi) = \operatorname{sen} t \cos \pi + \cos t \operatorname{sen} \pi = -\operatorname{sen} t$.
3. El límite se transforma en $\displaystyle \lim_{t \to 0} \frac{-\operatorname{sen} t}{t}$.
4. Por el límite fundamental: $-1$.

**Resultado final:** $\displaystyle \lim_{x \to \pi} \frac{\operatorname{sen} x}{x - \pi} = -1$
