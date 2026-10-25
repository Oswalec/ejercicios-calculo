---
titulo: "Cotas superior e inferior de una función racional"
tema: "funciones"
seccion: "otras-propiedades"
dificultad: "intermedio"
metodo: "Desigualdad x² + 1 ≥ 2|x|"
orden: 6
---

## Enunciado

Demuestra que $f(x) = \dfrac{3x}{x^2 + 1}$ está acotada y halla sus valores máximo y mínimo.

## Solución

1. Para todo $x$: $(|x| - 1)^2 \ge 0$, es decir, $x^2 - 2|x| + 1 \ge 0$, o sea $x^2 + 1 \ge 2|x|$.
2. Como $x^2 + 1 > 0$: $|f(x)| = \frac{3|x|}{x^2 + 1} \le \frac{3|x|}{2|x|} = \frac{3}{2}$ para $x \neq 0$. Para $x = 0$, $f(0) = 0$.
3. Por lo tanto $-\frac{3}{2} \le f(x) \le \frac{3}{2}$ para todo $x$: $f$ está acotada.
4. La igualdad del paso 1 ocurre cuando $|x| = 1$: $f(1) = \frac{3}{2}$ y $f(-1) = -\frac{3}{2}$. Esos son el máximo y el mínimo.

**Resultado final:** $-\dfrac{3}{2} \le f(x) \le \dfrac{3}{2}$; máximo $\dfrac{3}{2}$ en $x = 1$ y mínimo $-\dfrac{3}{2}$ en $x = -1$.
