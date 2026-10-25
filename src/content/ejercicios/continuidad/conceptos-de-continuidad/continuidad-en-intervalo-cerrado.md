---
titulo: "Continuidad en un intervalo cerrado"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "intermedio"
metodo: "Continuidad en el interior y continuidad lateral en los extremos"
orden: 6
---

## Enunciado

Demuestra que $f(x) = \sqrt{9 - x^2}$ es continua en el intervalo cerrado $[-3, 3]$.

## Solución

1. $f$ es continua en $[a, b]$ si es continua en cada punto de $(a, b)$, continua por la derecha en $a$ y continua por la izquierda en $b$.
2. Interior: para $-3 < c < 3$, $9 - c^2 > 0$. El polinomio $9 - x^2$ es continuo y la raíz es continua en los positivos, así que la composición es continua en $c$.
3. Extremo $a = -3$: $f(-3) = 0$ y $\displaystyle \lim_{x \to -3^+} \sqrt{9 - x^2} = 0$, porque $9 - x^2 \to 0^+$. Es continua por la derecha.
4. Extremo $b = 3$: de forma análoga, $\displaystyle \lim_{x \to 3^-} \sqrt{9 - x^2} = 0 = f(3)$. Es continua por la izquierda.

**Resultado final:** $f$ es continua en $[-3, 3]$.
