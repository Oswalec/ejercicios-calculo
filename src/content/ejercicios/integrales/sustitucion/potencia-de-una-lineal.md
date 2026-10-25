---
titulo: "Sustitución en la potencia de una expresión lineal"
tema: "integrales"
seccion: "sustitucion"
dificultad: "basico"
metodo: "Sustitución u = 2x + 3"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int (2x + 3)^7\,dx$.

## Solución

1. Hacemos $u = 2x + 3$, con $du = 2\,dx$, es decir, $dx = \frac{du}{2}$.
2. $\int (2x + 3)^7\,dx = \frac{1}{2}\int u^7\,du = \frac{1}{2} \cdot \frac{u^8}{8} = \frac{u^8}{16}$.
3. Regresamos a $x$: $\frac{(2x + 3)^8}{16} + C$.
4. Comprobación: $\left[\frac{(2x + 3)^8}{16}\right]' = \frac{8(2x + 3)^7 \cdot 2}{16} = (2x + 3)^7$.

**Resultado final:** $\displaystyle \int (2x + 3)^7\,dx = \frac{(2x + 3)^8}{16} + C$
