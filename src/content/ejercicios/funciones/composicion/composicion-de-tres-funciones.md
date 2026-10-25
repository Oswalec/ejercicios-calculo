---
titulo: "Composición de tres funciones"
tema: "funciones"
seccion: "composicion"
dificultad: "intermedio"
metodo: "Composición de adentro hacia afuera"
orden: 8
---

## Enunciado

Sean $f(x) = x^2$, $g(x) = x + 1$ y $h(x) = \sqrt{x}$. Halla $(f \circ g \circ h)(x)$, su dominio y su valor en $x = 4$.

## Solución

1. $(f \circ g \circ h)(x) = f(g(h(x)))$: primero se aplica $h$, luego $g$ y al final $f$.
2. $h(x) = \sqrt{x}$; $g(\sqrt{x}) = \sqrt{x} + 1$; $f(\sqrt{x} + 1) = (\sqrt{x} + 1)^2$.
3. Dominio: $h$ exige $x \ge 0$; $g$ y $f$ están definidas en todo $\mathbb{R}$. Entonces el dominio es $[0, \infty)$.
4. En $x = 4$: $(\sqrt{4} + 1)^2 = (2 + 1)^2 = 9$.

**Resultado final:** $(f \circ g \circ h)(x) = (\sqrt{x} + 1)^2$, con dominio $[0, \infty)$ y valor $9$ en $x = 4$.
