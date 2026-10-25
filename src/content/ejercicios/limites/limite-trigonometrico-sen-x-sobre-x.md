---
titulo: "Límite trigonométrico notable sen x / x"
tema: "limites"
dificultad: "intermedio"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\operatorname{sen}(5x)}{3x}
$$

## Solución

1. Al sustituir $x = 0$ obtenemos $\frac{0}{0}$. Usaremos el límite notable $\displaystyle \lim_{u \to 0} \frac{\operatorname{sen} u}{u} = 1$.
2. Para que aparezca $\frac{\operatorname{sen}(5x)}{5x}$, multiplicamos y dividimos por $5$:
   $$
   \frac{\operatorname{sen}(5x)}{3x} = \frac{5}{3} \cdot \frac{\operatorname{sen}(5x)}{5x}
   $$
3. Hacemos $u = 5x$. Cuando $x \to 0$, también $u \to 0$, así que $\frac{\operatorname{sen}(5x)}{5x} \to 1$.
4. Por lo tanto el límite es $\frac{5}{3} \cdot 1 = \frac{5}{3}$.

**Respuesta:** $\displaystyle \lim_{x \to 0} \frac{\operatorname{sen}(5x)}{3x} = \frac{5}{3}$
