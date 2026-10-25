---
titulo: "Aproximación lineal de (1.02)⁵"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "basico"
metodo: "Linealización en a = 1"
orden: 6
---

## Enunciado

Usa una aproximación lineal para estimar $(1.02)^5$.

## Solución

1. Tomamos $f(x) = x^5$ y $a = 1$, un punto cercano donde el valor es fácil: $f(1) = 1$.
2. $f'(x) = 5x^4$, así que $f'(1) = 5$. Linealización: $L(x) = 1 + 5(x - 1)$.
3. $(1.02)^5 \approx L(1.02) = 1 + 5(0.02) = 1.1$.
4. El valor real es $1.10408\ldots$, con un error de unas $4$ milésimas.

**Resultado final:** $(1.02)^5 \approx 1.1$
