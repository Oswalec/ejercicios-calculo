---
titulo: "Concavidad de x·eˣ"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "intermedio"
metodo: "Signo de la segunda derivada"
orden: 3
---

## Enunciado

Estudia la concavidad de $f(x) = xe^{x}$ y halla su punto de inflexión.

## Solución

1. $f'(x) = e^{x} + xe^{x} = e^{x}(1 + x)$.
2. $f''(x) = e^{x}(1 + x) + e^{x} = e^{x}(2 + x)$.
3. Como $e^{x} > 0$, el signo de $f''$ es el de $x + 2$: negativo para $x < -2$ y positivo para $x > -2$.
4. La concavidad cambia en $x = -2$, y $f(-2) = -2e^{-2} = -\frac{2}{e^2}$.

**Resultado final:** Cóncava hacia abajo en $(-\infty, -2)$ y hacia arriba en $(-2, \infty)$; inflexión en $\left(-2, -\dfrac{2}{e^2}\right)$.
