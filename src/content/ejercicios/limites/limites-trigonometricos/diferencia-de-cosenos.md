---
titulo: "Diferencia de cosenos con ángulos múltiples"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "avanzado"
metodo: "Transformación de diferencia de cosenos en producto"
orden: 9
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\cos(3x) - \cos x}{x^2}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{1 - 1}{0} = \frac{0}{0}$.
2. Usamos la identidad $\cos A - \cos B = -2\operatorname{sen}\left(\frac{A + B}{2}\right)\operatorname{sen}\left(\frac{A - B}{2}\right)$ con $A = 3x$ y $B = x$: $\cos(3x) - \cos x = -2\operatorname{sen}(2x)\operatorname{sen} x$.
3. La expresión queda $\frac{-2\operatorname{sen}(2x)\operatorname{sen} x}{x^2} = -2 \cdot \frac{\operatorname{sen}(2x)}{x} \cdot \frac{\operatorname{sen} x}{x}$.
4. Ajustamos el argumento: $\frac{\operatorname{sen}(2x)}{x} = 2 \cdot \frac{\operatorname{sen}(2x)}{2x} \to 2$, y $\frac{\operatorname{sen} x}{x} \to 1$.
5. Multiplicamos: $-2 \cdot 2 \cdot 1 = -4$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\cos(3x) - \cos x}{x^2} = -4$
