---
titulo: "Existencia de una raíz con límites y Bolzano"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "intermedio"
metodo: "Continuidad mediante límites y teorema de Bolzano"
orden: 7
---

## Enunciado

Demuestra que la ecuación

$$
x^3 + x - 1 = 0
$$

tiene al menos una solución en el intervalo $(0, 1)$ y localízala en un intervalo de longitud $\frac{1}{4}$.

## Solución

1. Sea $f(x) = x^3 + x - 1$. Para todo $a$, $\displaystyle \lim_{x \to a} f(x) = a^3 + a - 1 = f(a)$ (límite de un polinomio), así que $f$ es continua en $[0, 1]$.
2. Teorema de Bolzano: si $f$ es continua en $[a, b]$ y $f(a)$ y $f(b)$ tienen signos opuestos, existe $c \in (a, b)$ con $f(c) = 0$.
3. Evaluamos: $f(0) = -1 < 0$ y $f(1) = 1 + 1 - 1 = 1 > 0$. Hay al menos una raíz en $(0, 1)$.
4. Bisección: $f(0.5) = 0.125 + 0.5 - 1 = -0.375 < 0$, así que la raíz está en $(0.5, 1)$. Luego $f(0.75) = 0.421875 + 0.75 - 1 = 0.171875 > 0$, así que está en $(0.5, 0.75)$.
5. El intervalo $(0.5, 0.75)$ tiene longitud $\frac{1}{4}$.

**Resultado final:** La ecuación tiene una raíz en $(0, 1)$; más precisamente, en $(0.5,\ 0.75)$.
