---
titulo: "Valor absoluto en un cociente racional"
tema: "limites"
seccion: "limites-laterales"
dificultad: "intermedio"
metodo: "Definición del valor absoluto y límites laterales"
orden: 4
---

## Enunciado

Determina si existe el siguiente límite:

$$
\lim_{x \to 3} \frac{|x - 3|}{x^2 - 9}
$$

## Solución

1. El valor absoluto cambia de expresión en $x = 3$: $|x - 3| = x - 3$ si $x \ge 3$ y $|x - 3| = -(x - 3)$ si $x < 3$. Por eso calculamos los límites laterales.
2. Factorizamos el denominador: $x^2 - 9 = (x - 3)(x + 3)$.
3. Por la derecha ($x > 3$): $\frac{x - 3}{(x - 3)(x + 3)} = \frac{1}{x + 3}$, así que $\displaystyle \lim_{x \to 3^+} \frac{|x - 3|}{x^2 - 9} = \frac{1}{6}$.
4. Por la izquierda ($x < 3$, cerca de $3$): $\frac{-(x - 3)}{(x - 3)(x + 3)} = -\frac{1}{x + 3}$, así que $\displaystyle \lim_{x \to 3^-} \frac{|x - 3|}{x^2 - 9} = -\frac{1}{6}$.
5. Como $\frac{1}{6} \neq -\frac{1}{6}$, el límite bilateral no existe.

**Resultado final:** El límite no existe: por la izquierda vale $-\dfrac{1}{6}$ y por la derecha $\dfrac{1}{6}$.
