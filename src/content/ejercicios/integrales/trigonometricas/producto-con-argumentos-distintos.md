---
titulo: "Producto de senos y cosenos con argumentos distintos"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Fórmula de producto a suma"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int \operatorname{sen}(3x)\cos(2x)\,dx$.

## Solución

1. Fórmula de producto a suma: $\operatorname{sen} A\cos B = \frac{1}{2}\left[\operatorname{sen}(A + B) + \operatorname{sen}(A - B)\right]$.
2. Con $A = 3x$ y $B = 2x$: $\operatorname{sen}(3x)\cos(2x) = \frac{1}{2}\left[\operatorname{sen}(5x) + \operatorname{sen} x\right]$.
3. Integramos: $\frac{1}{2}\left[-\frac{\cos(5x)}{5} - \cos x\right] + C$.

**Resultado final:** $\displaystyle \int \operatorname{sen}(3x)\cos(2x)\,dx = -\frac{\cos(5x)}{10} - \frac{\cos x}{2} + C$
