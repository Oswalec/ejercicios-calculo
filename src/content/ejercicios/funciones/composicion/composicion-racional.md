---
titulo: "Composición de funciones racionales"
tema: "funciones"
seccion: "composicion"
dificultad: "intermedio"
metodo: "Composición y dominio de la compuesta"
orden: 3
---

## Enunciado

Sean $f(x) = \dfrac{1}{x}$ y $g(x) = \dfrac{1}{x - 2}$. Halla $(f \circ g)(x)$ y su dominio.

## Solución

1. $\operatorname{Dom}(f \circ g) = \{x \in \operatorname{Dom} g : g(x) \in \operatorname{Dom} f\}$.
2. $\operatorname{Dom} g = \mathbb{R} \setminus \{2\}$ y $\operatorname{Dom} f = \mathbb{R} \setminus \{0\}$. Como $g(x) = \frac{1}{x - 2}$ nunca vale $0$, la segunda condición no quita puntos.
3. Componemos: $(f \circ g)(x) = f\left(\frac{1}{x - 2}\right) = \frac{1}{\frac{1}{x - 2}} = x - 2$.
4. Aunque la expresión final sea $x - 2$, el dominio sigue excluyendo $x = 2$, donde $g$ no está definida.

**Resultado final:** $(f \circ g)(x) = x - 2$, con dominio $\mathbb{R} \setminus \{2\}$.
