---
titulo: "Límite que define una potencia del número e"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "avanzado"
metodo: "Cambio de variable y límite fundamental de e"
orden: 1
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^{x}
$$

## Solución

1. La base tiende a $1$ y el exponente a $\infty$: es una indeterminación del tipo $1^{\infty}$. Usaremos el límite notable $\displaystyle \lim_{u \to \infty} \left(1 + \frac{1}{u}\right)^{u} = e$.
2. Hacemos el cambio $\frac{3}{x} = \frac{1}{u}$, es decir, $x = 3u$. Cuando $x \to \infty$, también $u \to \infty$.
3. Reescribimos la expresión: $\left(1 + \frac{3}{x}\right)^{x} = \left(1 + \frac{1}{u}\right)^{3u} = \left[\left(1 + \frac{1}{u}\right)^{u}\right]^{3}$.
4. Como la función $t \mapsto t^3$ es continua, el límite es $\left[\displaystyle \lim_{u \to \infty} \left(1 + \frac{1}{u}\right)^{u}\right]^{3} = e^{3}$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^{x} = e^{3}$
