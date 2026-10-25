---
titulo: "Continuidad de x sen(1/x) en el origen"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "avanzado"
metodo: "Teorema del encaje y definición de continuidad"
orden: 8
---

## Enunciado

Sea

$$
f(x) = \begin{cases} x\operatorname{sen}\left(\dfrac{1}{x}\right), & x \neq 0 \\ 0, & x = 0 \end{cases}
$$

Demuestra que $f$ es continua en $x = 0$.

## Solución

1. Condición (i): $f(0) = 0$.
2. Condición (ii): como $\left|\operatorname{sen}\left(\frac{1}{x}\right)\right| \le 1$, para $x \neq 0$ se cumple $0 \le |f(x)| \le |x|$, es decir, $-|x| \le f(x) \le |x|$.
3. Como $\displaystyle \lim_{x \to 0} (-|x|) = \lim_{x \to 0} |x| = 0$, por el teorema del encaje $\displaystyle \lim_{x \to 0} f(x) = 0$.
4. Condición (iii): $\displaystyle \lim_{x \to 0} f(x) = 0 = f(0)$.

**Resultado final:** $f$ es continua en $x = 0$.
