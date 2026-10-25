---
titulo: "Dos parámetros: continuidad y un valor dado"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "intermedio"
metodo: "Sistema con la condición de continuidad y el dato adicional"
orden: 9
---

## Enunciado

Halla $a$ y $b$ si $f$ es continua en $x = 1$ y $f(3) = 10$:

$$
f(x) = \begin{cases} ax^2, & x < 1 \\ 4x + b, & x \ge 1 \end{cases}
$$

## Solución

1. Dato adicional: $3 \ge 1$, así que $f(3) = 12 + b = 10$, de donde $b = -2$.
2. Continuidad en $x = 1$: $f(1) = 4 + b = 2$, y el límite derecho también vale $2$.
3. Límite izquierdo: $\displaystyle \lim_{x \to 1^-} ax^2 = a$. Igualamos: $a = 2$.
4. Comprobación: con $a = 2$ y $b = -2$, ambos lados valen $2$ en $x = 1$, y $f(3) = 12 - 2 = 10$.

**Resultado final:** $a = 2$ y $b = -2$
