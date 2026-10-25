---
titulo: "Integral de sen² x"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "basico"
metodo: "Identidad de reducción de potencia"
orden: 1
---

## Enunciado

Calcula $\displaystyle \int \operatorname{sen}^2 x\,dx$.

## Solución

1. Para potencias pares de seno o coseno se usa la reducción de potencia: $\operatorname{sen}^2 x = \frac{1 - \cos(2x)}{2}$.
2. $\int \operatorname{sen}^2 x\,dx = \frac{1}{2}\int\left(1 - \cos(2x)\right)dx$.
3. $= \frac{1}{2}\left(x - \frac{\operatorname{sen}(2x)}{2}\right) = \frac{x}{2} - \frac{\operatorname{sen}(2x)}{4} + C$.

**Resultado final:** $\displaystyle \int \operatorname{sen}^2 x\,dx = \frac{x}{2} - \frac{\operatorname{sen}(2x)}{4} + C$
