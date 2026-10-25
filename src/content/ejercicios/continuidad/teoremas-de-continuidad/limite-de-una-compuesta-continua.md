---
titulo: "Límite de una compuesta con el teorema de continuidad"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Continuidad de la función exterior y límite de la interior"
orden: 9
---

## Enunciado

Calcula

$$
\lim_{x \to 0} \cos\left(\frac{\pi\operatorname{sen} x}{x}\right)
$$

## Solución

1. Teorema: si $\displaystyle \lim_{x \to a} g(x) = L$ y $h$ es continua en $L$, entonces $\displaystyle \lim_{x \to a} h(g(x)) = h(L)$.
2. Función interior: $g(x) = \frac{\pi\operatorname{sen} x}{x} = \pi \cdot \frac{\operatorname{sen} x}{x} \to \pi \cdot 1 = \pi$.
3. Función exterior: $h(u) = \cos u$, continua en todo $\mathbb{R}$, en particular en $\pi$.
4. Por el teorema: el límite es $\cos\pi = -1$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \cos\left(\frac{\pi\operatorname{sen} x}{x}\right) = -1$
