---
titulo: "Límites laterales con valor absoluto"
tema: "limites"
seccion: "limites-laterales"
dificultad: "intermedio"
metodo: "Cálculo de límites laterales"
orden: 1
---

## Enunciado

Determina si existe el siguiente límite:

$$
\lim_{x \to 0} \frac{|x|}{x}
$$

## Solución

1. Por definición, $|x| = x$ si $x \ge 0$ y $|x| = -x$ si $x < 0$. Como la definición cambia en $x = 0$, calculamos los límites laterales.
2. Por la derecha ($x \to 0^+$, $x > 0$): $\frac{|x|}{x} = \frac{x}{x} = 1$, así que $\displaystyle \lim_{x \to 0^+} \frac{|x|}{x} = 1$.
3. Por la izquierda ($x \to 0^-$, $x < 0$): $\frac{|x|}{x} = \frac{-x}{x} = -1$, así que $\displaystyle \lim_{x \to 0^-} \frac{|x|}{x} = -1$.
4. Un límite existe solo si los dos límites laterales son iguales. Como $-1 \neq 1$, el límite no existe.

**Resultado final:** El límite no existe: $\displaystyle \lim_{x \to 0^-} \frac{|x|}{x} = -1$ y $\displaystyle \lim_{x \to 0^+} \frac{|x|}{x} = 1$
