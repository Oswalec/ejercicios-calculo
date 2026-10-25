---
titulo: "Radical en el numerador y diferencia de cuadrados abajo"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "intermedio"
metodo: "Racionalización y factorización"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 3} \frac{\sqrt{x + 1} - 2}{x^2 - 9}
$$

## Solución

1. Al sustituir $x = 3$: numerador $\sqrt{4} - 2 = 0$ y denominador $9 - 9 = 0$. Es una indeterminación $\frac{0}{0}$.
2. Racionalizamos el numerador: $\sqrt{x + 1} - 2 = \frac{(x + 1) - 4}{\sqrt{x + 1} + 2} = \frac{x - 3}{\sqrt{x + 1} + 2}$.
3. Factorizamos el denominador: $x^2 - 9 = (x - 3)(x + 3)$.
4. Para $x \neq 3$: $\frac{x - 3}{\left(\sqrt{x + 1} + 2\right)(x - 3)(x + 3)} = \frac{1}{\left(\sqrt{x + 1} + 2\right)(x + 3)}$.
5. Sustituimos $x = 3$: $\frac{1}{(2 + 2)(3 + 3)} = \frac{1}{24}$.

**Resultado final:** $\displaystyle \lim_{x \to 3} \frac{\sqrt{x + 1} - 2}{x^2 - 9} = \frac{1}{24}$
