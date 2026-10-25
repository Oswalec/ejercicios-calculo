---
titulo: "Discontinuidad oscilatoria"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "intermedio"
metodo: "Criterio de sucesiones"
orden: 4
---

## Enunciado

Sea $f(x) = \operatorname{sen}\left(\dfrac{1}{x}\right)$ para $x \neq 0$ y $f(0) = 0$. Clasifica la discontinuidad en $x = 0$.

## Solución

1. Para que $f$ fuera continua en $0$, toda sucesión $x_n \to 0$ con $x_n \neq 0$ debería cumplir $f(x_n) \to f(0) = 0$.
2. Con $y_n = \frac{1}{\frac{\pi}{2} + 2n\pi} \to 0$ se obtiene $f(y_n) = \operatorname{sen}\left(\frac{\pi}{2} + 2n\pi\right) = 1$ para todo $n$, que no tiende a $0$.
3. Además, con $x_n = \frac{1}{n\pi}$ se obtiene $f(x_n) = 0$. Dos sucesiones dan valores distintos, así que el límite (ni siquiera los laterales) no existe.
4. La función toma todos los valores de $[-1, 1]$ en cualquier intervalo alrededor de $0$, sin tender a un número ni a $\pm\infty$: la discontinuidad es **oscilatoria** (esencial).

**Resultado final:** Discontinuidad oscilatoria (esencial) en $x = 0$.
