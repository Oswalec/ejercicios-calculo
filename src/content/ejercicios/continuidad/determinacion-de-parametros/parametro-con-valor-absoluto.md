---
titulo: "Parámetro en una función con valor absoluto"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "basico"
metodo: "Igualación de límites laterales con el valor de la función"
orden: 5
---

## Enunciado

Halla $a$ para que sea continua en $\mathbb{R}$:

$$
f(x) = \begin{cases} |x - 1| + a, & x \le 3 \\ 2x - 1, & x > 3 \end{cases}
$$

## Solución

1. $|x - 1| + a$ es continua (el valor absoluto lo es) y $2x - 1$ también. Solo falta $x = 3$.
2. $f(3) = |3 - 1| + a = 2 + a$, que coincide con el límite izquierdo.
3. Límite derecho: $\displaystyle \lim_{x \to 3^+} (2x - 1) = 5$.
4. Igualamos: $2 + a = 5$, de donde $a = 3$.

**Resultado final:** $a = 3$
