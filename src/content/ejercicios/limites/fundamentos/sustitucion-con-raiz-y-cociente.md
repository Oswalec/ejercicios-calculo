---
titulo: "Sustitución directa en una función con raíz y cociente"
tema: "limites"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Continuidad y sustitución directa"
orden: 4
---

## Enunciado

Calcula el siguiente límite, justificando por qué se puede sustituir directamente:

$$
\lim_{x \to 3} \frac{\sqrt{x + 1}\,\left(x^2 - 2x\right)}{x + 2}
$$

## Solución

1. La función es una combinación de funciones continuas: $\sqrt{x + 1}$ es continua donde $x + 1 \ge 0$, los polinomios son continuos en todo $\mathbb{R}$ y el cociente es continuo donde $x + 2 \neq 0$.
2. En $x = 3$ se cumple $x + 1 = 4 > 0$ y $x + 2 = 5 \neq 0$, así que la función es continua en $x = 3$ y el límite es igual al valor de la función.
3. Sustituimos: $\sqrt{3 + 1} = 2$ y $3^2 - 2(3) = 9 - 6 = 3$.
4. Por lo tanto: $\frac{2 \cdot 3}{3 + 2} = \frac{6}{5}$.

**Resultado final:** $\displaystyle \lim_{x \to 3} \frac{\sqrt{x + 1}\,(x^2 - 2x)}{x + 2} = \frac{6}{5}$
