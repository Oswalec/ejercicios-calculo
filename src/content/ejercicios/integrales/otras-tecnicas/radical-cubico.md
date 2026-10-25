---
titulo: "Integral con una raíz cúbica"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "basico"
metodo: "Sustitución u = x − 1"
orden: 3
---

## Enunciado

Calcula $\displaystyle \int x\sqrt[3]{x - 1}\,dx$.

## Solución

1. Hacemos $u = x - 1$, con $du = dx$ y $x = u + 1$.
2. $\int (u + 1)u^{1/3}\,du = \int\left(u^{4/3} + u^{1/3}\right)du = \frac{3}{7}u^{7/3} + \frac{3}{4}u^{4/3}$.
3. Regresamos a $x$: $\frac{3}{7}(x - 1)^{7/3} + \frac{3}{4}(x - 1)^{4/3} + C$.

**Resultado final:** $\displaystyle \int x\sqrt[3]{x - 1}\,dx = \frac{3}{7}(x - 1)^{7/3} + \frac{3}{4}(x - 1)^{4/3} + C$
