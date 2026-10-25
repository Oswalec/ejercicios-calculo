---
titulo: "Sustitución con un radical: x√(x + 1)"
tema: "integrales"
seccion: "sustitucion"
dificultad: "intermedio"
metodo: "Sustitución u = x + 1 despejando x"
orden: 7
---

## Enunciado

Calcula $\displaystyle \int x\sqrt{x + 1}\,dx$.

## Solución

1. Hacemos $u = x + 1$, con $du = dx$. El factor $x$ que sobra se expresa con $u$: $x = u - 1$.
2. $\int x\sqrt{x + 1}\,dx = \int (u - 1)u^{1/2}\,du = \int \left(u^{3/2} - u^{1/2}\right)du$.
3. Integramos: $\frac{2}{5}u^{5/2} - \frac{2}{3}u^{3/2}$.
4. Regresamos a $x$: $\frac{2}{5}(x + 1)^{5/2} - \frac{2}{3}(x + 1)^{3/2} + C$.

**Resultado final:** $\displaystyle \int x\sqrt{x + 1}\,dx = \frac{2}{5}(x + 1)^{5/2} - \frac{2}{3}(x + 1)^{3/2} + C$
