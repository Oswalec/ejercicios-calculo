---
titulo: "Teorema del encaje con cotas dadas"
tema: "limites"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Teorema del encaje"
orden: 10
---

## Enunciado

Si para todo $x$ se cumple

$$
3 - x^2 \le f(x) \le 3 + x^2,
$$

calcula $\displaystyle \lim_{x \to 0} f(x)$.

## Solución

1. Teorema del encaje (o del sándwich): si $g(x) \le f(x) \le h(x)$ cerca de $a$ y $\displaystyle \lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, entonces $\displaystyle \lim_{x \to a} f(x) = L$.
2. Tomamos $g(x) = 3 - x^2$ y $h(x) = 3 + x^2$. La desigualdad se cumple para todo $x$.
3. Límite de la cota inferior: $\displaystyle \lim_{x \to 0} (3 - x^2) = 3$.
4. Límite de la cota superior: $\displaystyle \lim_{x \to 0} (3 + x^2) = 3$.
5. Como ambas cotas tienden a $3$, por el teorema del encaje $\displaystyle \lim_{x \to 0} f(x) = 3$.

**Resultado final:** $\displaystyle \lim_{x \to 0} f(x) = 3$
