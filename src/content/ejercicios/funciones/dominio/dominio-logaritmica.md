---
titulo: "Dominio de una función logarítmica"
tema: "funciones"
seccion: "dominio"
dificultad: "intermedio"
metodo: "Argumento del logaritmo estrictamente positivo"
orden: 6
---

## Enunciado

Halla el dominio de

$$
f(x) = \ln\left(x^2 - 4x\right)
$$

## Solución

1. El logaritmo solo está definido para argumentos estrictamente positivos: $x^2 - 4x > 0$.
2. Factorizamos: $x(x - 4) > 0$. Los puntos críticos son $x = 0$ y $x = 4$.
3. Signo del producto: si $x < 0$, ambos factores son negativos y el producto es positivo; si $0 < x < 4$, el producto es negativo; si $x > 4$, es positivo.
4. Los puntos críticos se excluyen, porque $\ln 0$ no está definido.

**Resultado final:** $\operatorname{Dom} f = (-\infty, 0) \cup (4, \infty)$
