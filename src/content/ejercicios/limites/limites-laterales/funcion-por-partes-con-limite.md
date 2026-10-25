---
titulo: "Límite bilateral de una función por partes que empalma"
tema: "limites"
seccion: "limites-laterales"
dificultad: "basico"
metodo: "Igualdad de límites laterales"
orden: 3
---

## Enunciado

Sea

$$
f(x) = \begin{cases} x^2 - 4, & x < 3 \\ 2x - 1, & x \ge 3 \end{cases}
$$

Determina si existe $\displaystyle \lim_{x \to 3} f(x)$ y, si existe, calcúlalo.

## Solución

1. Por la izquierda ($x < 3$): $\displaystyle \lim_{x \to 3^-} (x^2 - 4) = 9 - 4 = 5$.
2. Por la derecha ($x > 3$): $\displaystyle \lim_{x \to 3^+} (2x - 1) = 6 - 1 = 5$.
3. Los dos límites laterales existen y son iguales a $5$.
4. Por el criterio de los límites laterales, el límite bilateral existe y vale $5$.

**Resultado final:** $\displaystyle \lim_{x \to 3} f(x) = 5$
