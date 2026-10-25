---
titulo: "Límite fundamental exponencial con argumento 3x"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "basico"
metodo: "Límite fundamental (e^u − 1)/u"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{e^{3x} - 1}{x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{1 - 1}{0} = \frac{0}{0}$. Usaremos el límite fundamental $\displaystyle \lim_{u \to 0} \frac{e^{u} - 1}{u} = 1$.
2. Para que el denominador coincida con el exponente, multiplicamos y dividimos por $3$: $\frac{e^{3x} - 1}{x} = 3 \cdot \frac{e^{3x} - 1}{3x}$.
3. Con $u = 3x$: cuando $x \to 0$, $u \to 0$, así que $\frac{e^{3x} - 1}{3x} \to 1$.
4. Por lo tanto el límite es $3 \cdot 1 = 3$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{e^{3x} - 1}{x} = 3$
