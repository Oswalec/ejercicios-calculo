---
titulo: "Límites laterales infinitos con potencia par"
tema: "limites"
seccion: "limites-laterales"
dificultad: "basico"
metodo: "Análisis del signo"
orden: 10
---

## Enunciado

Calcula los límites laterales en $x = -3$ de

$$
f(x) = \frac{2}{(x + 3)^2}
$$

## Solución

1. Al sustituir $x = -3$ obtenemos $\frac{2}{0}$: el numerador es positivo y el denominador tiende a $0$, así que los límites laterales son infinitos.
2. El denominador $(x + 3)^2$ es positivo para todo $x \neq -3$, tanto por la izquierda como por la derecha, porque es un cuadrado.
3. Por la derecha y por la izquierda, $\frac{2}{(x + 3)^2}$ es positivo y crece sin cota: $\displaystyle \lim_{x \to -3^-} f(x) = \lim_{x \to -3^+} f(x) = +\infty$.
4. Como ambos lados tienden a $+\infty$, se escribe $\displaystyle \lim_{x \to -3} f(x) = +\infty$. El límite no es un número real; la notación describe que la función crece sin cota, y $x = -3$ es una asíntota vertical.

**Resultado final:** $\displaystyle \lim_{x \to -3^-} \frac{2}{(x + 3)^2} = \lim_{x \to -3^+} \frac{2}{(x + 3)^2} = +\infty$
