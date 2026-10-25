---
titulo: "Límite con la identidad del ángulo doble"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "intermedio"
metodo: "Identidad del ángulo doble"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{1 - \cos(2x)}{x \operatorname{sen} x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{0}{0}$. Usamos la identidad del ángulo doble $\cos(2x) = 1 - 2\operatorname{sen}^2 x$, de donde $1 - \cos(2x) = 2\operatorname{sen}^2 x$.
2. La expresión queda $\frac{2\operatorname{sen}^2 x}{x \operatorname{sen} x}$.
3. Cerca de $0$ y con $x \neq 0$ se cumple $\operatorname{sen} x \neq 0$, así que simplificamos: $\frac{2\operatorname{sen} x}{x}$.
4. Por el límite fundamental: $2 \cdot 1 = 2$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{1 - \cos(2x)}{x \operatorname{sen} x} = 2$
