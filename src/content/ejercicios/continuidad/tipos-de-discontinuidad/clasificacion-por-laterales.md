---
titulo: "Clasificación mediante límites laterales con valor absoluto"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "intermedio"
metodo: "Definición del valor absoluto y límites laterales"
orden: 8
---

## Enunciado

Clasifica la discontinuidad en $x = 1$ de

$$
f(x) = \frac{|x - 1|}{x - 1} + x
$$

## Solución

1. $f(1)$ no está definido (el denominador se anula).
2. Por la derecha ($x > 1$): $|x - 1| = x - 1$, así que $f(x) = 1 + x$ y $\displaystyle \lim_{x \to 1^+} f(x) = 2$.
3. Por la izquierda ($x < 1$): $|x - 1| = -(x - 1)$, así que $f(x) = -1 + x$ y $\displaystyle \lim_{x \to 1^-} f(x) = 0$.
4. Los límites laterales son finitos y distintos: discontinuidad **de salto**, de magnitud $2 - 0 = 2$.

**Resultado final:** Discontinuidad de salto en $x = 1$ (límite izquierdo $0$, derecho $2$).
