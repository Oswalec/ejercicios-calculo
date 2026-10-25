---
titulo: "Límites laterales infinitos de una función racional"
tema: "limites"
seccion: "limites-laterales"
dificultad: "intermedio"
metodo: "Análisis del signo"
orden: 6
---

## Enunciado

Calcula los límites laterales en $x = 1$ de

$$
f(x) = \frac{x + 2}{x - 1}
$$

## Solución

1. Al sustituir $x = 1$ el numerador vale $3 \neq 0$ y el denominador $0$: la expresión es del tipo $\frac{3}{0}$, así que los límites laterales son infinitos y su signo depende del signo del denominador.
2. Por la derecha ($x \to 1^+$): $x - 1 > 0$ y tiende a $0$; el numerador tiende a $3 > 0$. El cociente es positivo y crece sin cota: $\displaystyle \lim_{x \to 1^+} f(x) = +\infty$.
3. Por la izquierda ($x \to 1^-$): $x - 1 < 0$ y tiende a $0$; el numerador tiende a $3 > 0$. El cociente es negativo y decrece sin cota: $\displaystyle \lim_{x \to 1^-} f(x) = -\infty$.
4. Los límites laterales son distintos, así que $\displaystyle \lim_{x \to 1} f(x)$ no existe; la recta $x = 1$ es una asíntota vertical.

**Resultado final:** $\displaystyle \lim_{x \to 1^-} \frac{x + 2}{x - 1} = -\infty$ y $\displaystyle \lim_{x \to 1^+} \frac{x + 2}{x - 1} = +\infty$
