---
titulo: "Prueba de la segunda derivada"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "basico"
metodo: "Prueba de la segunda derivada"
orden: 4
---

## Enunciado

Clasifica los puntos críticos de $f(x) = 2x^3 - 3x^2 - 12x$ con la prueba de la segunda derivada.

## Solución

1. $f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$. Números críticos: $x = -1$ y $x = 2$.
2. Prueba: si $f'(c) = 0$ y $f''(c) < 0$, hay un máximo local; si $f''(c) > 0$, un mínimo local. Aquí $f''(x) = 12x - 6$.
3. $f''(-1) = -18 < 0$: máximo local, con $f(-1) = -2 - 3 + 12 = 7$.
4. $f''(2) = 18 > 0$: mínimo local, con $f(2) = 16 - 12 - 24 = -20$.

**Resultado final:** Máximo local $(-1, 7)$; mínimo local $(2, -20)$.
