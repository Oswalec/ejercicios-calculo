---
titulo: "Dominio de la raíz cuadrada de una cuadrática"
tema: "funciones"
seccion: "dominio"
dificultad: "intermedio"
metodo: "Inecuación cuadrática por puntos críticos"
orden: 3
---

## Enunciado

Halla el dominio de

$$
f(x) = \sqrt{x^2 - x - 12}
$$

## Solución

1. El radicando debe cumplir $x^2 - x - 12 \ge 0$.
2. Factorizamos: $x^2 - x - 12 = (x - 4)(x + 3)$. Los puntos críticos son $x = -3$ y $x = 4$.
3. Estudiamos el signo del producto: si $x < -3$, ambos factores son negativos y el producto es positivo; si $-3 < x < 4$, el producto es negativo; si $x > 4$, ambos son positivos y el producto es positivo.
4. Incluimos los puntos críticos, porque ahí el radicando vale $0$ y la raíz está definida.

**Resultado final:** $\operatorname{Dom} f = (-\infty, -3] \cup [4, \infty)$
