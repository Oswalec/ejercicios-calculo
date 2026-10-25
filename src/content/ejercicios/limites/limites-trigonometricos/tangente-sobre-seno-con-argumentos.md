---
titulo: "Tangente entre seno con argumentos distintos"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "intermedio"
metodo: "Límites fundamentales con ajuste de argumentos"
orden: 5
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\tan(3x)}{\operatorname{sen}(2x)}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{0}{0}$. Usaremos $\displaystyle \lim_{u \to 0} \frac{\tan u}{u} = 1$ y $\displaystyle \lim_{u \to 0} \frac{\operatorname{sen} u}{u} = 1$, para lo cual cada función debe dividirse entre su propio argumento.
2. Para $x \neq 0$ reescribimos: $\frac{\tan(3x)}{\operatorname{sen}(2x)} = \frac{\tan(3x)}{3x} \cdot \frac{2x}{\operatorname{sen}(2x)} \cdot \frac{3x}{2x}$.
3. Con $u = 3x \to 0$: $\frac{\tan(3x)}{3x} \to 1$. Con $u = 2x \to 0$: $\frac{2x}{\operatorname{sen}(2x)} \to 1$.
4. El último factor es constante: $\frac{3x}{2x} = \frac{3}{2}$ para $x \neq 0$.
5. Multiplicamos los límites: $1 \cdot 1 \cdot \frac{3}{2} = \frac{3}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\tan(3x)}{\operatorname{sen}(2x)} = \frac{3}{2}$
