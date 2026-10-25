---
titulo: "Límite fundamental de tan x / x"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "basico"
metodo: "Límite fundamental sen x / x"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\tan x}{x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{0}{0}$. Expresamos la tangente en términos de seno y coseno: $\tan x = \frac{\operatorname{sen} x}{\cos x}$.
2. Reescribimos: $\frac{\tan x}{x} = \frac{\operatorname{sen} x}{x} \cdot \frac{1}{\cos x}$.
3. Usamos el límite fundamental $\displaystyle \lim_{x \to 0} \frac{\operatorname{sen} x}{x} = 1$.
4. El coseno es continuo y $\cos 0 = 1$, así que $\displaystyle \lim_{x \to 0} \frac{1}{\cos x} = 1$.
5. Por la propiedad del producto de límites: $1 \cdot 1 = 1$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\tan x}{x} = 1$
