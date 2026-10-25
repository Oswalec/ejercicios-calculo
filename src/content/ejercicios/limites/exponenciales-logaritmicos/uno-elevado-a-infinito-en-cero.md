---
titulo: "Indeterminación 1^∞ cuando x tiende a cero"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "intermedio"
metodo: "Límite fundamental (1 + u)^(1/u) = e"
orden: 5
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} (1 + 2x)^{1/x}
$$

## Solución

1. Cuando $x \to 0$ la base tiende a $1$ y el exponente $\frac{1}{x}$ no está acotado: es una indeterminación del tipo $1^{\infty}$. Usaremos $\displaystyle \lim_{u \to 0} (1 + u)^{1/u} = e$.
2. Para que el exponente sea el recíproco de $2x$, escribimos $\frac{1}{x} = \frac{1}{2x} \cdot 2$: $(1 + 2x)^{1/x} = \left[(1 + 2x)^{1/(2x)}\right]^{2}$.
3. Con $u = 2x \to 0$: $(1 + 2x)^{1/(2x)} \to e$.
4. Como la función $t \mapsto t^2$ es continua, el límite es $e^{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} (1 + 2x)^{1/x} = e^{2}$
