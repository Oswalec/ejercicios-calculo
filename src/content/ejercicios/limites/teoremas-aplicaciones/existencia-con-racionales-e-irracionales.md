---
titulo: "Existencia del límite en una función definida por racionales e irracionales"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "avanzado"
metodo: "Teorema del encaje y criterio de sucesiones"
orden: 6
---

## Enunciado

Sea

$$
f(x) = \begin{cases} x^2, & x \in \mathbb{Q} \\ 0, & x \notin \mathbb{Q} \end{cases}
$$

Demuestra que $\displaystyle \lim_{x \to 0} f(x)$ existe y que $\displaystyle \lim_{x \to 1} f(x)$ no existe.

## Solución

1. En $x = 0$: para todo $x$ se cumple $0 \le f(x) \le x^2$, porque $f(x)$ vale $x^2$ o $0$. Como $\displaystyle \lim_{x \to 0} 0 = \lim_{x \to 0} x^2 = 0$, por el teorema del encaje $\displaystyle \lim_{x \to 0} f(x) = 0$.
2. En $x = 1$ usamos el criterio de sucesiones: si el límite existiera, toda sucesión $x_n \to 1$ con $x_n \neq 1$ daría el mismo valor de $\displaystyle \lim f(x_n)$.
3. Sucesión de racionales: $q_n = 1 + \frac{1}{n} \to 1$. Como $q_n \in \mathbb{Q}$, $f(q_n) = q_n^2 \to 1$.
4. Sucesión de irracionales: $r_n = 1 + \frac{\sqrt{2}}{n} \to 1$. Como $r_n \notin \mathbb{Q}$, $f(r_n) = 0 \to 0$.
5. Se obtienen dos valores distintos ($1$ y $0$), así que $\displaystyle \lim_{x \to 1} f(x)$ no existe.

**Resultado final:** $\displaystyle \lim_{x \to 0} f(x) = 0$; $\displaystyle \lim_{x \to 1} f(x)$ no existe.
