---
titulo: "Sustitución algebraica con u = √(x + 4)"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "intermedio"
metodo: "Sustitución algebraica que elimina la raíz"
orden: 2
---

## Enunciado

Calcula $\displaystyle \int \frac{x}{\sqrt{x + 4}}\,dx$.

## Solución

1. Hacemos $u = \sqrt{x + 4}$: $x = u^2 - 4$ y $dx = 2u\,du$.
2. $\int \frac{u^2 - 4}{u} \cdot 2u\,du = 2\int\left(u^2 - 4\right)du = \frac{2u^3}{3} - 8u$.
3. Regresamos a $x$: $\frac{2}{3}(x + 4)^{3/2} - 8\sqrt{x + 4} + C$.
4. Factorizando: $\frac{2}{3}\sqrt{x + 4}\,(x - 8) + C$.

**Resultado final:** $\displaystyle \int \frac{x}{\sqrt{x + 4}}\,dx = \frac{2}{3}\sqrt{x + 4}\,(x - 8) + C$
