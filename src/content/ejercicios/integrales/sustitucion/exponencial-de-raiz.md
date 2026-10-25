---
titulo: "Sustitución con la raíz en el exponente"
tema: "integrales"
seccion: "sustitucion"
dificultad: "intermedio"
metodo: "Sustitución u = √x"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int \frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx$, para $x > 0$.

## Solución

1. Hacemos $u = \sqrt{x}$, con $du = \frac{dx}{2\sqrt{x}}$, es decir, $\frac{dx}{\sqrt{x}} = 2\,du$.
2. $\int \frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx = \int e^{u} \cdot 2\,du = 2e^{u}$.
3. Regresamos a $x$: $2e^{\sqrt{x}} + C$.
4. Comprobación: $\left(2e^{\sqrt{x}}\right)' = 2e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}} = \frac{e^{\sqrt{x}}}{\sqrt{x}}$.

**Resultado final:** $\displaystyle \int \frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx = 2e^{\sqrt{x}} + C$
