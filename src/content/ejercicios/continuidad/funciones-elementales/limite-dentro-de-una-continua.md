---
titulo: "Pasar el límite dentro de una función continua"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "intermedio"
metodo: "Límite de la composición con una función continua"
orden: 10
---

## Enunciado

Calcula

$$
\lim_{x \to 2} \arctan\left(\frac{x^2 - 4}{x - 2}\right)
$$

## Solución

1. Teorema: si $\displaystyle \lim_{x \to a} g(x) = L$ y $h$ es continua en $L$, entonces $\displaystyle \lim_{x \to a} h(g(x)) = h(L)$.
2. Límite interior: para $x \neq 2$, $\frac{x^2 - 4}{x - 2} = x + 2$, así que $\displaystyle \lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$.
3. La función $\arctan$ es continua en $\mathbb{R}$, en particular en $4$.
4. Por el teorema: el límite es $\arctan 4$. La función interior no está definida en $2$, pero el teorema solo necesita su límite.

**Resultado final:** $\displaystyle \lim_{x \to 2} \arctan\left(\frac{x^2 - 4}{x - 2}\right) = \arctan 4$
