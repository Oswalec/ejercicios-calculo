---
titulo: "Límite de (tan x − sen x) / x³"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "avanzado"
metodo: "Factorización trigonométrica y límites fundamentales"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\tan x - \operatorname{sen} x}{x^3}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{0}{0}$. Factorizamos el numerador: $\tan x - \operatorname{sen} x = \frac{\operatorname{sen} x}{\cos x} - \operatorname{sen} x = \frac{\operatorname{sen} x\,(1 - \cos x)}{\cos x}$.
2. La expresión queda $\frac{\operatorname{sen} x}{x} \cdot \frac{1 - \cos x}{x^2} \cdot \frac{1}{\cos x}$.
3. Primer factor: $\frac{\operatorname{sen} x}{x} \to 1$ (límite fundamental).
4. Segundo factor: multiplicando por $1 + \cos x$, $\frac{1 - \cos x}{x^2} = \left(\frac{\operatorname{sen} x}{x}\right)^2 \frac{1}{1 + \cos x} \to 1 \cdot \frac{1}{2} = \frac{1}{2}$.
5. Tercer factor: $\frac{1}{\cos x} \to 1$ por continuidad. Multiplicamos: $1 \cdot \frac{1}{2} \cdot 1 = \frac{1}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\tan x - \operatorname{sen} x}{x^3} = \frac{1}{2}$
