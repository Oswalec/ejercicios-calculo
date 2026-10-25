---
titulo: "Derivada de 1/x por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "intermedio"
metodo: "Definición de derivada y resta de fracciones"
orden: 6
---

## Enunciado

Demuestra por definición que $\dfrac{d}{dx}\left(\dfrac{1}{x}\right) = -\dfrac{1}{x^2}$ para $x \neq 0$.

## Solución

1. $f'(x) = \displaystyle \lim_{h \to 0} \frac{\frac{1}{x + h} - \frac{1}{x}}{h}$, con $x \neq 0$ y $h$ pequeño, de modo que $x + h \neq 0$.
2. Restamos las fracciones: $\frac{1}{x + h} - \frac{1}{x} = \frac{x - (x + h)}{x(x + h)} = \frac{-h}{x(x + h)}$.
3. Dividimos entre $h \neq 0$: $\frac{-1}{x(x + h)}$.
4. Cuando $h \to 0$: $\frac{-1}{x \cdot x} = -\frac{1}{x^2}$.

**Resultado final:** $\dfrac{d}{dx}\left(\dfrac{1}{x}\right) = -\dfrac{1}{x^2}$
