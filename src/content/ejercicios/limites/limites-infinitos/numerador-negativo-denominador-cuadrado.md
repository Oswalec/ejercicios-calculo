---
titulo: "Numerador negativo sobre un cuadrado que se anula"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "basico"
metodo: "Análisis del signo"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 3} \frac{x - 5}{(x - 3)^2}
$$

## Solución

1. Al sustituir $x = 3$: numerador $3 - 5 = -2$ y denominador $0$. Es de la forma $\frac{-2}{0}$: el límite es infinito.
2. El denominador $(x - 3)^2$ es positivo para todo $x \neq 3$, por ambos lados, y tiende a $0$.
3. El numerador tiende a $-2 < 0$. Un número negativo dividido entre una cantidad positiva que tiende a $0$ es negativo y crece en valor absoluto sin cota.
4. Por los dos lados se obtiene $-\infty$, así que $\displaystyle \lim_{x \to 3} \frac{x - 5}{(x - 3)^2} = -\infty$.

**Resultado final:** $\displaystyle \lim_{x \to 3} \frac{x - 5}{(x - 3)^2} = -\infty$
