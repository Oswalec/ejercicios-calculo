---
titulo: "El seno: sobreyectivo pero no inyectivo"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "intermedio"
metodo: "Contraejemplo y análisis del rango"
orden: 5
---

## Enunciado

Sea $f\colon [0, \pi] \to [0, 1]$, $f(x) = \operatorname{sen} x$. ¿Es inyectiva? ¿Es sobreyectiva? ¿Qué restricción del dominio la haría biyectiva sobre $[-1, 1]$?

## Solución

1. Inyectividad: $\operatorname{sen}\frac{\pi}{6} = \operatorname{sen}\frac{5\pi}{6} = \frac{1}{2}$, con $\frac{\pi}{6} \neq \frac{5\pi}{6}$, ambos en $[0, \pi]$. No es inyectiva.
2. Sobreyectividad: en $[0, \pi]$ el seno es no negativo y crece de $0$ a $1$ en $\left[0, \frac{\pi}{2}\right]$, así que toma todos los valores de $[0, 1]$. Es sobreyectiva sobre $[0, 1]$.
3. En $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ el seno es creciente (inyectivo) y toma todos los valores de $[-1, 1]$.
4. Por eso, $\operatorname{sen}\colon \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \to [-1, 1]$ es biyectiva. Es la restricción con la que se define $\operatorname{arcsen}$.

**Resultado final:** En $[0, \pi] \to [0, 1]$ es sobreyectiva pero no inyectiva; restringida a $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right] \to [-1, 1]$ es biyectiva.
