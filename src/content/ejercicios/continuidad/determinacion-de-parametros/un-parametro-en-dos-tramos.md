---
titulo: "Un parámetro para empalmar dos tramos"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "basico"
metodo: "Igualación de límites laterales con el valor de la función"
orden: 2
---

## Enunciado

Halla $a$ para que sea continua en $\mathbb{R}$:

$$
f(x) = \begin{cases} ax + 1, & x < 2 \\ x^2 - a, & x \ge 2 \end{cases}
$$

## Solución

1. En cada tramo $f$ es un polinomio, así que es continua para $x \neq 2$. Solo hay que imponer la continuidad en $x = 2$.
2. $f(2) = 4 - a$ y $\displaystyle \lim_{x \to 2^+} f(x) = 4 - a$. Por la izquierda, $\displaystyle \lim_{x \to 2^-} (ax + 1) = 2a + 1$.
3. Igualamos: $2a + 1 = 4 - a$, de donde $3a = 3$ y $a = 1$.
4. Comprobación: con $a = 1$, ambos lados valen $3$ y $f(2) = 3$.

**Resultado final:** $a = 1$
