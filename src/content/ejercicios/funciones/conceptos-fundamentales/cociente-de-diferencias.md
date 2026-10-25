---
titulo: "Cociente de diferencias de una función cuadrática"
tema: "funciones"
seccion: "conceptos-fundamentales"
dificultad: "intermedio"
metodo: "Evaluación y simplificación algebraica"
orden: 3
---

## Enunciado

Sea $f(x) = x^2 + x$. Simplifica, para $h \neq 0$:

$$
\frac{f(x + h) - f(x)}{h}
$$

## Solución

1. Evaluamos: $f(x + h) = (x + h)^2 + (x + h) = x^2 + 2xh + h^2 + x + h$.
2. Restamos $f(x) = x^2 + x$: $f(x + h) - f(x) = 2xh + h^2 + h$.
3. Factorizamos $h$: $h(2x + h + 1)$.
4. Dividimos entre $h \neq 0$: $\frac{h(2x + h + 1)}{h} = 2x + h + 1$.

**Resultado final:** $\dfrac{f(x + h) - f(x)}{h} = 2x + h + 1$
