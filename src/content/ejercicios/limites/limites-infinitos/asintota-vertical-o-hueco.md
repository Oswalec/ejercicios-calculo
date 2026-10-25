---
titulo: "¿Asíntota vertical o hueco?"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "intermedio"
metodo: "Factorización y límites laterales en cada discontinuidad"
orden: 5
---

## Enunciado

Sea

$$
f(x) = \frac{x + 1}{x^2 - x - 2}
$$

Determina el comportamiento de $f$ cerca de cada valor donde se anula el denominador.

## Solución

1. Factorizamos el denominador: $x^2 - x - 2 = (x - 2)(x + 1)$. Se anula en $x = 2$ y en $x = -1$, que no pertenecen al dominio.
2. En $x = -1$: para $x \neq -1$, $f(x) = \frac{x + 1}{(x - 2)(x + 1)} = \frac{1}{x - 2}$. Entonces $\displaystyle \lim_{x \to -1} f(x) = \frac{1}{-3} = -\frac{1}{3}$. El límite es finito: hay un hueco en $\left(-1, -\frac{1}{3}\right)$, no una asíntota.
3. En $x = 2$: cerca de $2$, $f(x) = \frac{1}{x - 2}$, de la forma $\frac{1}{0}$.
4. Por la derecha ($x - 2 > 0$): $\displaystyle \lim_{x \to 2^+} f(x) = +\infty$. Por la izquierda ($x - 2 < 0$): $\displaystyle \lim_{x \to 2^-} f(x) = -\infty$.
5. Conclusión: $x = 2$ es asíntota vertical; en $x = -1$ la discontinuidad es removible.

**Resultado final:** Asíntota vertical en $x = 2$, con $\displaystyle \lim_{x \to 2^-} f(x) = -\infty$ y $\displaystyle \lim_{x \to 2^+} f(x) = +\infty$; hueco en $x = -1$, con $\displaystyle \lim_{x \to -1} f(x) = -\frac{1}{3}$.
