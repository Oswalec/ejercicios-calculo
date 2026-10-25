---
titulo: "Signo del denominador 1 − x²"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "intermedio"
metodo: "Análisis del signo de cada factor del denominador"
orden: 4
---

## Enunciado

Calcula los límites laterales en $x = 1$ de

$$
f(x) = \frac{x}{1 - x^2}
$$

## Solución

1. Al sustituir $x = 1$: numerador $1$ y denominador $0$. Los límites laterales son infinitos.
2. Factorizamos: $1 - x^2 = (1 - x)(1 + x)$. Cerca de $x = 1$, $1 + x \to 2 > 0$ y el numerador tiende a $1 > 0$.
3. Por la izquierda ($x < 1$): $1 - x > 0$, así que el denominador es positivo y tiende a $0$: $\displaystyle \lim_{x \to 1^-} f(x) = +\infty$.
4. Por la derecha ($x > 1$): $1 - x < 0$, así que el denominador es negativo y tiende a $0$: $\displaystyle \lim_{x \to 1^+} f(x) = -\infty$.
5. Cuidado con el orden de los factores: aquí el factor es $1 - x$, no $x - 1$, y su signo es el opuesto.

**Resultado final:** $\displaystyle \lim_{x \to 1^-} \frac{x}{1 - x^2} = +\infty$ y $\displaystyle \lim_{x \to 1^+} \frac{x}{1 - x^2} = -\infty$
