---
titulo: "Hallar una función a partir de su segunda derivada"
tema: "integrales"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Integración sucesiva con dos condiciones"
orden: 7
---

## Enunciado

Halla $f$ si $f''(x) = 12x$, $f'(0) = 1$ y $f(0) = 2$.

## Solución

1. Primera integración: $f'(x) = \int 12x\,dx = 6x^2 + C_1$. Con $f'(0) = 1$: $C_1 = 1$, así que $f'(x) = 6x^2 + 1$.
2. Segunda integración: $f(x) = \int(6x^2 + 1)\,dx = 2x^3 + x + C_2$.
3. Con $f(0) = 2$: $C_2 = 2$.
4. Se necesitan dos condiciones porque cada integración introduce una constante.

**Resultado final:** $f(x) = 2x^3 + x + 2$
