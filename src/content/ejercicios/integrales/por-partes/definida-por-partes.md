---
titulo: "Integral definida por partes"
tema: "integrales"
seccion: "por-partes"
dificultad: "basico"
metodo: "Integración por partes con evaluación en los límites"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int_{1}^{e} \ln x\,dx$.

## Solución

1. Por partes, con $u = \ln x$ y $dv = dx$: $\int \ln x\,dx = x\ln x - x$.
2. En una integral definida: $\int_a^b u\,dv = \left[uv\right]_a^b - \int_a^b v\,du$. Equivalentemente, se evalúa la primitiva.
3. $\left[x\ln x - x\right]_{1}^{e} = (e \cdot 1 - e) - (1 \cdot 0 - 1) = 0 - (-1) = 1$.

**Resultado final:** $\displaystyle \int_{1}^{e} \ln x\,dx = 1$
