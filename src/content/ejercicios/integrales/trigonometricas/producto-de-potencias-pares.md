---
titulo: "Producto de potencias pares de seno y coseno"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Ángulo doble y reducción de potencia"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int \operatorname{sen}^2 x\cos^2 x\,dx$.

## Solución

1. Por el ángulo doble: $\operatorname{sen} x\cos x = \frac{1}{2}\operatorname{sen}(2x)$, así que $\operatorname{sen}^2 x\cos^2 x = \frac{1}{4}\operatorname{sen}^2(2x)$.
2. Reducción de potencia: $\operatorname{sen}^2(2x) = \frac{1 - \cos(4x)}{2}$. El integrando es $\frac{1 - \cos(4x)}{8}$.
3. $\int \frac{1 - \cos(4x)}{8}\,dx = \frac{x}{8} - \frac{\operatorname{sen}(4x)}{32} + C$.

**Resultado final:** $\displaystyle \int \operatorname{sen}^2 x\cos^2 x\,dx = \frac{x}{8} - \frac{\operatorname{sen}(4x)}{32} + C$
