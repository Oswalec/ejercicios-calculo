---
titulo: "Teorema del sándwich"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "avanzado"
metodo: "Teorema del encaje"
orden: 1
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} x^2 \operatorname{sen}\left(\frac{1}{x}\right)
$$

## Solución

1. No podemos sustituir $x = 0$, y además $\operatorname{sen}\left(\frac{1}{x}\right)$ no tiene límite cuando $x \to 0$: oscila entre $-1$ y $1$. Usaremos el teorema del sándwich (o del encaje).
2. Para todo $x \neq 0$ se cumple $-1 \le \operatorname{sen}\left(\frac{1}{x}\right) \le 1$.
3. Multiplicamos por $x^2 \ge 0$ (no cambia el sentido de las desigualdades): $-x^2 \le x^2 \operatorname{sen}\left(\frac{1}{x}\right) \le x^2$.
4. Las funciones de los extremos cumplen $\displaystyle \lim_{x \to 0} (-x^2) = 0$ y $\displaystyle \lim_{x \to 0} x^2 = 0$.
5. Como la función queda atrapada entre dos funciones que tienden a $0$, por el teorema del sándwich su límite también es $0$.

**Resultado final:** $\displaystyle \lim_{x \to 0} x^2 \operatorname{sen}\left(\frac{1}{x}\right) = 0$
