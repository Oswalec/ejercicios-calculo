---
titulo: "Límites laterales con la función máximo entero"
tema: "limites"
seccion: "limites-laterales"
dificultad: "intermedio"
metodo: "Definición del máximo entero en cada lado"
orden: 5
---

## Enunciado

Sea $\lfloor x \rfloor$ el máximo entero menor o igual que $x$. Calcula los límites laterales en $x = 2$ de

$$
f(x) = x - \lfloor x \rfloor
$$

y determina si existe $\displaystyle \lim_{x \to 2} f(x)$.

## Solución

1. El máximo entero es constante en cada intervalo $[n, n + 1)$ con $n$ entero, y salta en cada entero. Por eso en $x = 2$ hay que estudiar los dos lados.
2. Por la izquierda: si $1 \le x < 2$, entonces $\lfloor x \rfloor = 1$ y $f(x) = x - 1$. Así, $\displaystyle \lim_{x \to 2^-} f(x) = 2 - 1 = 1$.
3. Por la derecha: si $2 \le x < 3$, entonces $\lfloor x \rfloor = 2$ y $f(x) = x - 2$. Así, $\displaystyle \lim_{x \to 2^+} f(x) = 2 - 2 = 0$.
4. Como $1 \neq 0$, el límite bilateral no existe.

**Resultado final:** $\displaystyle \lim_{x \to 2^-} f(x) = 1$, $\displaystyle \lim_{x \to 2^+} f(x) = 0$; el límite en $x = 2$ no existe.
