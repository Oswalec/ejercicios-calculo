---
titulo: "Elegir la técnica: sustitución seguida de partes"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "avanzado"
metodo: "Sustitución u = x² y luego integración por partes"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int x^3e^{x^2}\,dx$.

## Solución

1. Análisis: $e^{x^2}$ no tiene primitiva elemental por sí sola, pero hay un factor $x$ disponible para la sustitución $u = x^2$. El $x^2$ restante se expresa con $u$.
2. $x^3e^{x^2}\,dx = x^2 \cdot e^{x^2} \cdot x\,dx$. Con $u = x^2$, $du = 2x\,dx$: $\frac{1}{2}\int ue^{u}\,du$.
3. Por partes: $\int ue^{u}\,du = (u - 1)e^{u}$.
4. Resultado: $\frac{1}{2}\left(x^2 - 1\right)e^{x^2} + C$. Comprobación: la derivada es $xe^{x^2} + (x^2 - 1)xe^{x^2} = x^3e^{x^2}$.

**Resultado final:** $\displaystyle \int x^3e^{x^2}\,dx = \frac{1}{2}\left(x^2 - 1\right)e^{x^2} + C$
