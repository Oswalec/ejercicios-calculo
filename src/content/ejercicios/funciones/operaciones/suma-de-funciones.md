---
titulo: "Suma de funciones y su dominio"
tema: "funciones"
seccion: "operaciones"
dificultad: "basico"
metodo: "Dom(f + g) = Dom f ∩ Dom g"
orden: 1
---

## Enunciado

Sean $f(x) = \sqrt{x + 2}$ y $g(x) = \dfrac{1}{x - 1}$. Halla $(f + g)(x)$ y su dominio.

## Solución

1. Por definición, $(f + g)(x) = f(x) + g(x) = \sqrt{x + 2} + \frac{1}{x - 1}$.
2. La suma solo está definida donde lo están ambas funciones: $\operatorname{Dom}(f + g) = \operatorname{Dom} f \cap \operatorname{Dom} g$.
3. $\operatorname{Dom} f$: $x + 2 \ge 0$, es decir, $[-2, \infty)$. $\operatorname{Dom} g$: $x \neq 1$.
4. Intersecamos: $[-2, \infty)$ sin el punto $1$.

**Resultado final:** $(f + g)(x) = \sqrt{x + 2} + \dfrac{1}{x - 1}$, con dominio $[-2, 1) \cup (1, \infty)$.
