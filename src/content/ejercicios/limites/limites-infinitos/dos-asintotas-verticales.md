---
titulo: "Comportamiento alrededor de dos asíntotas verticales"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "avanzado"
metodo: "Análisis del signo de cada factor del denominador"
orden: 9
---

## Enunciado

Sea

$$
f(x) = \frac{2x^2}{x^2 - 9}
$$

Calcula los cuatro límites laterales en $x = 3$ y en $x = -3$.

## Solución

1. El denominador es $(x - 3)(x + 3)$ y se anula en $x = \pm 3$. En ambos puntos el numerador vale $2 \cdot 9 = 18 > 0$, así que los límites laterales son infinitos y el signo lo da el denominador.
2. Cerca de $x = 3$: $x + 3 \to 6 > 0$. Si $x \to 3^+$, $x - 3 > 0$ y el denominador es positivo: $\displaystyle \lim_{x \to 3^+} f(x) = +\infty$. Si $x \to 3^-$, $x - 3 < 0$: $\displaystyle \lim_{x \to 3^-} f(x) = -\infty$.
3. Cerca de $x = -3$: $x - 3 \to -6 < 0$. Si $x \to -3^+$, $x + 3 > 0$ y el denominador es negativo: $\displaystyle \lim_{x \to -3^+} f(x) = -\infty$.
4. Si $x \to -3^-$, $x + 3 < 0$ y el denominador es positivo (producto de dos negativos): $\displaystyle \lim_{x \to -3^-} f(x) = +\infty$.
5. Las rectas $x = 3$ y $x = -3$ son asíntotas verticales. La función es par, y por eso los comportamientos en $3$ y en $-3$ son simétricos.

**Resultado final:** $\displaystyle \lim_{x \to 3^-} f = -\infty$, $\displaystyle \lim_{x \to 3^+} f = +\infty$, $\displaystyle \lim_{x \to -3^-} f = +\infty$, $\displaystyle \lim_{x \to -3^+} f = -\infty$
