---
titulo: "Por partes repetida: x² sen x"
tema: "integrales"
seccion: "por-partes"
dificultad: "intermedio"
metodo: "Integración por partes aplicada dos veces"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int x^2\operatorname{sen} x\,dx$.

## Solución

1. Primera vez: $u = x^2$ y $dv = \operatorname{sen} x\,dx$, con $du = 2x\,dx$ y $v = -\cos x$. Entonces $\int x^2\operatorname{sen} x\,dx = -x^2\cos x + 2\int x\cos x\,dx$.
2. Segunda vez: $\int x\cos x\,dx = x\operatorname{sen} x + \cos x$.
3. Sustituimos: $-x^2\cos x + 2x\operatorname{sen} x + 2\cos x + C$.
4. Comprobación: la derivada es $-2x\cos x + x^2\operatorname{sen} x + 2\operatorname{sen} x + 2x\cos x - 2\operatorname{sen} x = x^2\operatorname{sen} x$.

**Resultado final:** $\displaystyle \int x^2\operatorname{sen} x\,dx = -x^2\cos x + 2x\operatorname{sen} x + 2\cos x + C$
