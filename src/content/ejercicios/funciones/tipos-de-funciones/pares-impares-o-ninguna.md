---
titulo: "Funciones pares, impares o ninguna de las dos"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "basico"
metodo: "Comparación de f(−x) con f(x) y −f(x)"
orden: 3
---

## Enunciado

Clasifica como par, impar o ninguna:

$$
f(x) = x^3 - x, \qquad g(x) = x^4 + \cos x, \qquad h(x) = x^2 + x
$$

## Solución

1. $f$ es par si $f(-x) = f(x)$ e impar si $f(-x) = -f(x)$, para todo $x$ del dominio (que debe ser simétrico). Aquí los tres dominios son $\mathbb{R}$.
2. $f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x)$: $f$ es impar.
3. $g(-x) = (-x)^4 + \cos(-x) = x^4 + \cos x = g(x)$, porque el coseno es par: $g$ es par.
4. $h(-x) = x^2 - x$. Con $x = 1$: $h(-1) = 0$, mientras que $h(1) = 2$ y $-h(1) = -2$. No coincide con ninguna de las dos: $h$ no es par ni impar.

**Resultado final:** $f$ es impar, $g$ es par y $h$ no es par ni impar.
