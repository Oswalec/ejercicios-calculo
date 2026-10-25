---
titulo: "Derivada de una función racional por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "intermedio"
metodo: "Definición de derivada y resta de fracciones"
orden: 8
---

## Enunciado

Usa la definición para hallar la derivada de $f(x) = \dfrac{2x + 1}{x - 1}$, con $x \neq 1$.

## Solución

1. $f(x + h) - f(x) = \frac{2x + 2h + 1}{x + h - 1} - \frac{2x + 1}{x - 1} = \frac{(2x + 2h + 1)(x - 1) - (2x + 1)(x + h - 1)}{(x + h - 1)(x - 1)}$.
2. Numerador: $(2x + 1)(x - 1) + 2h(x - 1) - (2x + 1)(x - 1) - (2x + 1)h = h\left[2(x - 1) - (2x + 1)\right] = -3h$.
3. Dividimos entre $h \neq 0$: $\frac{f(x + h) - f(x)}{h} = \frac{-3}{(x + h - 1)(x - 1)}$.
4. Cuando $h \to 0$: $f'(x) = \frac{-3}{(x - 1)^2}$.

**Resultado final:** $f'(x) = -\dfrac{3}{(x - 1)^2}$
