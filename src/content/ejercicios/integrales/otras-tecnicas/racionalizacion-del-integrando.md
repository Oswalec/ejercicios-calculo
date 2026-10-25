---
titulo: "Racionalización del integrando con u = √x"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "intermedio"
metodo: "Sustitución que elimina el radical"
orden: 1
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{1 + \sqrt{x}}$, para $x \ge 0$.

## Solución

1. Hacemos $u = \sqrt{x}$, con $u \ge 0$: $x = u^2$ y $dx = 2u\,du$. El integrando se vuelve racional.
2. $\int \frac{2u}{1 + u}\,du$. Dividimos: $\frac{2u}{1 + u} = 2 - \frac{2}{1 + u}$.
3. Integramos: $2u - 2\ln(1 + u)$, sin valor absoluto porque $1 + u > 0$.
4. Regresamos a $x$: $2\sqrt{x} - 2\ln\left(1 + \sqrt{x}\right) + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{1 + \sqrt{x}} = 2\sqrt{x} - 2\ln\left(1 + \sqrt{x}\right) + C$
