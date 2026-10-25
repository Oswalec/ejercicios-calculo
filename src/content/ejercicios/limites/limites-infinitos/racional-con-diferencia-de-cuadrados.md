---
titulo: "Límites laterales infinitos con diferencia de cuadrados"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "basico"
metodo: "Análisis del signo de cada factor del denominador"
orden: 2
---

## Enunciado

Calcula los límites laterales en $x = 2$ de

$$
f(x) = \frac{x^2 + 1}{x^2 - 4}
$$

## Solución

1. Al sustituir $x = 2$: numerador $5 \neq 0$ y denominador $0$. Es de la forma $\frac{5}{0}$, así que los límites laterales son infinitos. El signo lo da el denominador.
2. Factorizamos: $x^2 - 4 = (x - 2)(x + 2)$. Cerca de $x = 2$, el factor $x + 2$ tiende a $4 > 0$.
3. Por la derecha ($x > 2$): $x - 2 > 0$, así que el denominador tiende a $0$ con valores positivos. Entonces $\displaystyle \lim_{x \to 2^+} f(x) = +\infty$.
4. Por la izquierda ($x < 2$): $x - 2 < 0$, así que el denominador tiende a $0$ con valores negativos. Entonces $\displaystyle \lim_{x \to 2^-} f(x) = -\infty$.

**Resultado final:** $\displaystyle \lim_{x \to 2^-} f(x) = -\infty$ y $\displaystyle \lim_{x \to 2^+} f(x) = +\infty$
