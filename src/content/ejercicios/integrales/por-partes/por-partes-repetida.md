---
titulo: "Integración por partes repetida: x² eˣ"
tema: "integrales"
seccion: "por-partes"
dificultad: "intermedio"
metodo: "Integración por partes aplicada dos veces"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int x^2e^{x}\,dx$.

## Solución

1. Primera vez: $u = x^2$ y $dv = e^{x}\,dx$, con $du = 2x\,dx$ y $v = e^{x}$. Entonces $\int x^2e^{x}\,dx = x^2e^{x} - 2\int xe^{x}\,dx$.
2. Segunda vez, en $\int xe^{x}\,dx$: $u = x$ y $dv = e^{x}\,dx$, lo que da $xe^{x} - e^{x}$.
3. Sustituimos: $x^2e^{x} - 2(xe^{x} - e^{x}) + C = e^{x}(x^2 - 2x + 2) + C$.
4. Cada aplicación baja en uno el grado del polinomio, hasta que desaparece.

**Resultado final:** $\displaystyle \int x^2e^{x}\,dx = e^{x}\left(x^2 - 2x + 2\right) + C$
