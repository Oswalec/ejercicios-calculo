---
titulo: "Límite de una compuesta por continuidad"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "intermedio"
metodo: "Teorema de continuidad de la composición"
orden: 7
---

## Enunciado

Justifica que $f(x) = e^{\operatorname{sen} x}$ es continua en $\mathbb{R}$ y calcula $\displaystyle \lim_{x \to \pi} e^{\operatorname{sen} x}$.

## Solución

1. Teorema: si $g$ es continua en $a$ y $h$ es continua en $g(a)$, entonces $h \circ g$ es continua en $a$.
2. Aquí $g(x) = \operatorname{sen} x$, continua en $\mathbb{R}$, y $h(u) = e^{u}$, continua en $\mathbb{R}$. Por lo tanto, $f = h \circ g$ es continua en $\mathbb{R}$.
3. Por continuidad, el límite es el valor de la función: $\displaystyle \lim_{x \to \pi} e^{\operatorname{sen} x} = e^{\operatorname{sen}\pi} = e^{0} = 1$.

**Resultado final:** $f$ es continua en $\mathbb{R}$ y $\displaystyle \lim_{x \to \pi} e^{\operatorname{sen} x} = 1$.
