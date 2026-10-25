---
titulo: "Integración por partes cíclica: eˣ sen x"
tema: "integrales"
seccion: "por-partes"
dificultad: "avanzado"
metodo: "Integración por partes dos veces y despeje de la integral"
orden: 7
---

## Enunciado

Calcula $\displaystyle \int e^{x}\operatorname{sen} x\,dx$.

## Solución

1. Sea $I = \int e^{x}\operatorname{sen} x\,dx$. Primera vez: $u = \operatorname{sen} x$ y $dv = e^{x}\,dx$, lo que da $I = e^{x}\operatorname{sen} x - \int e^{x}\cos x\,dx$.
2. Segunda vez, con la misma elección ($u = \cos x$, $dv = e^{x}\,dx$): $\int e^{x}\cos x\,dx = e^{x}\cos x + \int e^{x}\operatorname{sen} x\,dx = e^{x}\cos x + I$.
3. Sustituimos: $I = e^{x}\operatorname{sen} x - e^{x}\cos x - I$. La integral original reaparece: es un ciclo.
4. Despejamos: $2I = e^{x}(\operatorname{sen} x - \cos x)$, así que $I = \frac{e^{x}(\operatorname{sen} x - \cos x)}{2} + C$.

**Resultado final:** $\displaystyle \int e^{x}\operatorname{sen} x\,dx = \frac{e^{x}(\operatorname{sen} x - \cos x)}{2} + C$
