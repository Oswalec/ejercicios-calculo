---
titulo: "Una función acotada superior e inferiormente"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "basico"
metodo: "Acotación algebraica"
orden: 7
---

## Enunciado

Demuestra que $f(x) = \dfrac{4}{x^2 + 1}$ es acotada y halla su valor máximo.

## Solución

1. Una función es acotada si existen $m$ y $M$ con $m \le f(x) \le M$ para todo $x$ del dominio. Aquí el dominio es $\mathbb{R}$.
2. Como $x^2 + 1 \ge 1 > 0$, el cociente es positivo: $f(x) > 0$.
3. Como $x^2 + 1 \ge 1$, su recíproco cumple $\frac{1}{x^2 + 1} \le 1$, y así $f(x) \le 4$.
4. Entonces $0 < f(x) \le 4$: $f$ es acotada. El valor $4$ se alcanza en $x = 0$, así que es el máximo.

**Resultado final:** $0 < f(x) \le 4$ para todo $x$; el máximo es $f(0) = 4$.
