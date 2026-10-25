---
titulo: "Continuidad de una función a trozos"
tema: "limites"
dificultad: "intermedio"
orden: 9
---

## Enunciado

Halla el valor de $k$ para que la siguiente función sea continua en $x = 1$:

$$
f(x) = \begin{cases} x^2 + k, & x < 1 \ 2x + 3, & x \ge 1 \end{cases}
$$

## Solución

1. $f$ es continua en $x = 1$ si $\displaystyle \lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = f(1)$.
2. Valor de la función: como $1 \ge 1$, usamos el segundo trozo: $f(1) = 2(1) + 3 = 5$.
3. Límite por la derecha (segundo trozo, polinomio continuo): $\displaystyle \lim_{x \to 1^+} (2x + 3) = 5$.
4. Límite por la izquierda (primer trozo, polinomio continuo): $\displaystyle \lim_{x \to 1^-} (x^2 + k) = 1 + k$.
5. Igualamos: $1 + k = 5$, de donde $k = 4$.

**Respuesta:** $k = 4$
