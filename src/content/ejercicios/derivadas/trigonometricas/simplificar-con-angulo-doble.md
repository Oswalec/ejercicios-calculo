---
titulo: "Simplificar con el ángulo doble antes de derivar"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Identidad del ángulo doble y regla de la cadena"
orden: 8
---

## Enunciado

Deriva $f(x) = \operatorname{sen}(2x)\cos(2x)$ usando primero una identidad.

## Solución

1. Por la identidad $\operatorname{sen}(2\theta) = 2\operatorname{sen}\theta\cos\theta$ con $\theta = 2x$: $\operatorname{sen}(2x)\cos(2x) = \frac{1}{2}\operatorname{sen}(4x)$.
2. Derivamos: $f'(x) = \frac{1}{2}\cos(4x) \cdot 4 = 2\cos(4x)$.
3. Comprobación con la regla del producto: $2\cos(2x)\cos(2x) - 2\operatorname{sen}(2x)\operatorname{sen}(2x) = 2\left[\cos^2(2x) - \operatorname{sen}^2(2x)\right] = 2\cos(4x)$.

**Resultado final:** $f'(x) = 2\cos(4x)$
