---
titulo: "Un límite que no existe por oscilación"
tema: "limites"
seccion: "fundamentos"
dificultad: "avanzado"
metodo: "Criterio de sucesiones"
orden: 5
---

## Enunciado

Demuestra que el siguiente límite no existe:

$$
\lim_{x \to 0} \operatorname{sen}\left(\frac{1}{x}\right)
$$

## Solución

1. Usamos el criterio de sucesiones: si $\displaystyle \lim_{x \to 0} f(x) = L$, entonces para **toda** sucesión $x_n \to 0$ con $x_n \neq 0$ se cumple $f(x_n) \to L$. Basta encontrar dos sucesiones que tiendan a $0$ y den límites distintos.
2. Sea $x_n = \frac{1}{n\pi}$, con $n \in \mathbb{N}$. Se cumple $x_n \to 0$ y $x_n \neq 0$, y $\operatorname{sen}\left(\frac{1}{x_n}\right) = \operatorname{sen}(n\pi) = 0$ para todo $n$. Entonces $f(x_n) \to 0$.
3. Sea $y_n = \frac{1}{\frac{\pi}{2} + 2n\pi}$. También $y_n \to 0$ e $y_n \neq 0$, y $\operatorname{sen}\left(\frac{1}{y_n}\right) = \operatorname{sen}\left(\frac{\pi}{2} + 2n\pi\right) = 1$ para todo $n$. Entonces $f(y_n) \to 1$.
4. Si el límite existiera y valiera $L$, por el paso 1 tendríamos a la vez $L = 0$ y $L = 1$, lo que contradice la unicidad del límite.
5. Por lo tanto, el límite no existe: la función oscila entre $-1$ y $1$ infinitas veces en cualquier intervalo que contenga a $0$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \operatorname{sen}\left(\frac{1}{x}\right)$ no existe.
