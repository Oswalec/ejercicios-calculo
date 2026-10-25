---
titulo: "Derivada de x² por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "basico"
metodo: "Definición de derivada y producto notable"
orden: 4
---

## Enunciado

Demuestra por definición que $\dfrac{d}{dx}\left(x^2\right) = 2x$.

## Solución

1. $f'(x) = \displaystyle \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$.
2. Desarrollamos: $(x + h)^2 - x^2 = x^2 + 2xh + h^2 - x^2 = 2xh + h^2$.
3. Para $h \neq 0$: $\frac{2xh + h^2}{h} = 2x + h$.
4. Cuando $h \to 0$: $2x + h \to 2x$.

**Resultado final:** $\dfrac{d}{dx}\left(x^2\right) = 2x$
