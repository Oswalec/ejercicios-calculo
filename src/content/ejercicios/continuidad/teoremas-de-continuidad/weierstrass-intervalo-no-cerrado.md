---
titulo: "Por qué Weierstrass exige un intervalo cerrado"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Contraejemplo a las hipótesis del teorema"
orden: 6
---

## Enunciado

Muestra que $f(x) = \dfrac{1}{x}$ es continua en $(0, 1]$ pero no alcanza un máximo absoluto allí. ¿Contradice esto el teorema de Weierstrass?

## Solución

1. $f$ es continua en $(0, 1]$, porque $x \neq 0$ en todo el intervalo.
2. No tiene máximo: para cualquier $M > 0$, el punto $x = \frac{1}{M + 1} \in (0, 1]$ cumple $f(x) = M + 1 > M$. Ningún valor es el mayor.
3. Sí tiene mínimo: $f$ es decreciente, así que el menor valor se alcanza en $x = 1$, con $f(1) = 1$.
4. No contradice el teorema: Weierstrass exige un intervalo **cerrado** $[a, b]$, y $(0, 1]$ no lo es; cerca de $0$ la función crece sin cota.

**Resultado final:** $f$ no alcanza máximo en $(0, 1]$ (no está acotada); no contradice el teorema, porque el intervalo no es cerrado.
