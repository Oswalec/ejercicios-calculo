---
titulo: "La función derivada por definición"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Definición de derivada por límite en un punto genérico"
orden: 9
---

## Enunciado

Usa la definición para hallar $f'(x)$ si $f(x) = 2x^2 - 5x + 1$.

## Solución

1. $f'(x) = \displaystyle \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$, con $x$ fijo.
2. $f(x + h) = 2(x^2 + 2xh + h^2) - 5x - 5h + 1 = 2x^2 + 4xh + 2h^2 - 5x - 5h + 1$.
3. Diferencia: $f(x + h) - f(x) = 4xh + 2h^2 - 5h = h(4x + 2h - 5)$.
4. Para $h \neq 0$ el cociente es $4x + 2h - 5$, que tiende a $4x - 5$ cuando $h \to 0$.

**Resultado final:** $f'(x) = 4x - 5$
