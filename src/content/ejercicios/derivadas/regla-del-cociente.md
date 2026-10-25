---
titulo: "Regla del cociente"
tema: "derivadas"
dificultad: "intermedio"
orden: 3
---

## Enunciado

Deriva la siguiente función:

$$
f(x) = \frac{2x + 1}{x - 3}
$$

## Solución

1. $f$ es el cociente de $u(x) = 2x + 1$ y $v(x) = x - 3$. Usamos la regla del cociente: $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$.
2. Derivamos: $u'(x) = 2$ y $v'(x) = 1$.
3. Sustituimos en la regla: $f'(x) = \frac{2(x - 3) - (2x + 1) \cdot 1}{(x - 3)^2}$.
4. Simplificamos el numerador: $2x - 6 - 2x - 1 = -7$.
5. Por lo tanto $f'(x) = \frac{-7}{(x - 3)^2}$, válida para $x \neq 3$.

**Respuesta:** $f'(x) = \dfrac{-7}{(x - 3)^2}$
