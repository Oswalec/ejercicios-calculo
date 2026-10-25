---
titulo: "El límite no depende del valor de la función en el punto"
tema: "limites"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Límites laterales y unicidad del límite"
orden: 8
---

## Enunciado

Sea la función

$$
f(x) = \begin{cases} x + 1, & x < 1 \\ 5, & x = 1 \\ 3 - x, & x > 1 \end{cases}
$$

Calcula $\displaystyle \lim_{x \to 1} f(x)$ y compáralo con $f(1)$.

## Solución

1. El límite cuando $x \to 1$ solo usa los valores de $f$ para $x$ cercano a $1$ con $x \neq 1$; el valor $f(1) = 5$ no interviene.
2. Por la izquierda ($x < 1$): $\displaystyle \lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x + 1) = 2$.
3. Por la derecha ($x > 1$): $\displaystyle \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (3 - x) = 2$.
4. Como ambos límites laterales existen y son iguales, el límite existe y es único: $\displaystyle \lim_{x \to 1} f(x) = 2$.
5. Comparación: $f(1) = 5 \neq 2$. El límite existe aunque no coincida con el valor de la función; eso indica que $f$ no es continua en $x = 1$.

**Resultado final:** $\displaystyle \lim_{x \to 1} f(x) = 2$, mientras que $f(1) = 5$.
