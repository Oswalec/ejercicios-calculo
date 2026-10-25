---
titulo: "Continuidad de una función por partes en el punto de empalme"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "basico"
metodo: "Verificación de las tres condiciones con límites laterales"
orden: 2
---

## Enunciado

Determina si es continua en $x = 2$:

$$
f(x) = \begin{cases} x^2 + 1, & x < 2 \\ 5, & x = 2 \\ 3x - 1, & x > 2 \end{cases}
$$

## Solución

1. Condición (i): $f(2) = 5$ está definido.
2. Condición (ii): calculamos los límites laterales. Por la izquierda, $\displaystyle \lim_{x \to 2^-} (x^2 + 1) = 5$; por la derecha, $\displaystyle \lim_{x \to 2^+} (3x - 1) = 5$. Son iguales, así que $\displaystyle \lim_{x \to 2} f(x) = 5$.
3. Condición (iii): $\displaystyle \lim_{x \to 2} f(x) = 5 = f(2)$.
4. Se cumplen las tres condiciones.

**Resultado final:** $f$ es continua en $x = 2$.
