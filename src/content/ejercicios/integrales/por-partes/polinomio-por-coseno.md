---
titulo: "Por partes: polinomio por coseno"
tema: "integrales"
seccion: "por-partes"
dificultad: "basico"
metodo: "Integración por partes con u = x"
orden: 3
---

## Enunciado

Calcula $\displaystyle \int x\cos x\,dx$.

## Solución

1. Fórmula de integración por partes: $\int u\,dv = uv - \int v\,du$.
2. Elegimos $u = x$, porque al derivarlo se simplifica, y $dv = \cos x\,dx$. Entonces $du = dx$ y $v = \operatorname{sen} x$.
3. $\int x\cos x\,dx = x\operatorname{sen} x - \int \operatorname{sen} x\,dx = x\operatorname{sen} x + \cos x + C$.
4. Comprobación: $(x\operatorname{sen} x + \cos x)' = \operatorname{sen} x + x\cos x - \operatorname{sen} x = x\cos x$.

**Resultado final:** $\displaystyle \int x\cos x\,dx = x\operatorname{sen} x + \cos x + C$
