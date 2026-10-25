---
titulo: "Teorema de Weierstrass: máximo y mínimo garantizados"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Teorema de Weierstrass y acotación algebraica"
orden: 5
---

## Enunciado

Justifica que $f(x) = \dfrac{x}{x^2 + 1}$ alcanza un máximo y un mínimo absolutos en $[0, 2]$, y hállalos.

## Solución

1. Teorema de Weierstrass: toda función continua en un intervalo cerrado y acotado $[a, b]$ alcanza en él un máximo y un mínimo absolutos.
2. $f$ es continua en $[0, 2]$ (cociente de polinomios con denominador $x^2 + 1 > 0$), así que el teorema garantiza los extremos.
3. Máximo: como $(x - 1)^2 \ge 0$, se cumple $x^2 + 1 \ge 2x$, y para $x \ge 0$, $f(x) \le \frac{x}{2x} = \frac{1}{2}$ (si $x > 0$). La igualdad ocurre en $x = 1$: $f(1) = \frac{1}{2}$.
4. Mínimo: en $[0, 2]$, $f(x) \ge 0$, y $f(0) = 0$.

**Resultado final:** Máximo absoluto $\dfrac{1}{2}$ en $x = 1$; mínimo absoluto $0$ en $x = 0$.
