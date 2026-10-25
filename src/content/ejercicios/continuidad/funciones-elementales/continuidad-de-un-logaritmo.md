---
titulo: "Continuidad de una función logarítmica"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "basico"
metodo: "Continuidad de la composición con el logaritmo"
orden: 4
---

## Enunciado

Determina dónde es continua $f(x) = \ln\left(x^2 - 1\right)$.

## Solución

1. El logaritmo natural es continuo en $(0, \infty)$, y $x^2 - 1$ es un polinomio continuo en $\mathbb{R}$.
2. Por la continuidad de la composición, $f$ es continua donde $x^2 - 1 > 0$.
3. Resolvemos: $x^2 > 1$, es decir, $|x| > 1$, o sea $x < -1$ o $x > 1$.
4. Ese conjunto es todo el dominio de $f$.

**Resultado final:** $f$ es continua en $(-\infty, -1) \cup (1, \infty)$.
