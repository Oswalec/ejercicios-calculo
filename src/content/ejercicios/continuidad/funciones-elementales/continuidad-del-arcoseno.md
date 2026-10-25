---
titulo: "Continuidad de una función arcoseno compuesta"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "intermedio"
metodo: "Continuidad de la composición con una trigonométrica inversa"
orden: 6
---

## Enunciado

Determina dónde es continua $f(x) = \operatorname{arcsen}(2x - 1)$ y calcula $\displaystyle \lim_{x \to 1/2} f(x)$.

## Solución

1. $\operatorname{arcsen} u$ es continua en $[-1, 1]$ y $2x - 1$ es continua en $\mathbb{R}$. La composición es continua donde $-1 \le 2x - 1 \le 1$.
2. Resolvemos: $0 \le 2x \le 2$, es decir, $0 \le x \le 1$. En los extremos la continuidad es lateral.
3. Como $\frac{1}{2} \in [0, 1]$ y $f$ es continua allí, el límite es el valor de la función: $f\left(\frac{1}{2}\right) = \operatorname{arcsen}(0) = 0$.

**Resultado final:** $f$ es continua en $[0, 1]$ y $\displaystyle \lim_{x \to 1/2} f(x) = 0$.
