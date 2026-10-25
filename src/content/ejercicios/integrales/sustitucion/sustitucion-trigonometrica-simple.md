---
titulo: "Sustitución con seno y coseno"
tema: "integrales"
seccion: "sustitucion"
dificultad: "basico"
metodo: "Sustitución u = sen x"
orden: 6
---

## Enunciado

Calcula $\displaystyle \int \operatorname{sen}^3 x\cos x\,dx$.

## Solución

1. $\cos x$ es la derivada de $\operatorname{sen} x$. Hacemos $u = \operatorname{sen} x$, con $du = \cos x\,dx$.
2. $\int \operatorname{sen}^3 x\cos x\,dx = \int u^3\,du = \frac{u^4}{4}$.
3. Regresamos a $x$: $\frac{\operatorname{sen}^4 x}{4} + C$.

**Resultado final:** $\displaystyle \int \operatorname{sen}^3 x\cos x\,dx = \frac{\operatorname{sen}^4 x}{4} + C$
