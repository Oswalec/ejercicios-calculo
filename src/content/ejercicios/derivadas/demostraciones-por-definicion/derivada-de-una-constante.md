---
titulo: "Derivada de una constante por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "basico"
metodo: "Definición de derivada por límite"
orden: 1
---

## Enunciado

Demuestra por definición que si $f(x) = c$ (constante), entonces $f'(x) = 0$.

## Solución

1. Definición: $f'(x) = \displaystyle \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$.
2. Como $f$ es constante, $f(x + h) = c$ y $f(x) = c$.
3. El cociente es $\frac{c - c}{h} = \frac{0}{h} = 0$ para todo $h \neq 0$.
4. El límite de la constante $0$ es $0$. Geométricamente, la gráfica es una recta horizontal, de pendiente $0$.

**Resultado final:** $\dfrac{d}{dx}(c) = 0$
