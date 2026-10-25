---
titulo: "Demostrar una desigualdad con la derivada"
tema: "aplicaciones-derivada"
seccion: "crecimiento"
dificultad: "avanzado"
metodo: "Mínimo absoluto de una función auxiliar"
orden: 10
---

## Enunciado

Demuestra que $e^{x} \ge 1 + x$ para todo $x \in \mathbb{R}$.

## Solución

1. Definimos $g(x) = e^{x} - 1 - x$. Hay que probar que $g(x) \ge 0$ para todo $x$.
2. $g'(x) = e^{x} - 1$, que es negativa para $x < 0$ (porque $e^{x} < 1$), nula en $x = 0$ y positiva para $x > 0$.
3. Entonces $g$ decrece en $(-\infty, 0)$ y crece en $(0, \infty)$, y su mínimo absoluto está en $x = 0$: $g(0) = 1 - 1 - 0 = 0$.
4. Por lo tanto $g(x) \ge g(0) = 0$ para todo $x$, es decir, $e^{x} \ge 1 + x$, con igualdad solo en $x = 0$. Geométricamente, la recta $y = 1 + x$ es la tangente a $y = e^{x}$ en $x = 0$ y queda por debajo de la curva.

**Resultado final:** $e^{x} \ge 1 + x$ para todo $x$, con igualdad solo en $x = 0$.
