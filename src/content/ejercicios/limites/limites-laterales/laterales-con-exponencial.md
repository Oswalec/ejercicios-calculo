---
titulo: "Límites laterales con una exponencial de 1/x"
tema: "limites"
seccion: "limites-laterales"
dificultad: "avanzado"
metodo: "Comportamiento lateral de e^(1/x)"
orden: 9
---

## Enunciado

Calcula los límites laterales en $x = 0$ de

$$
f(x) = \frac{1}{1 + e^{1/x}}
$$

y determina si existe $\displaystyle \lim_{x \to 0} f(x)$.

## Solución

1. Todo depende del exponente $\frac{1}{x}$, cuyo signo cambia en $x = 0$.
2. Por la derecha ($x \to 0^+$): $\frac{1}{x} \to +\infty$, y como $\displaystyle \lim_{t \to +\infty} e^{t} = +\infty$, el denominador $1 + e^{1/x} \to +\infty$. Entonces $\displaystyle \lim_{x \to 0^+} f(x) = 0$.
3. Por la izquierda ($x \to 0^-$): $\frac{1}{x} \to -\infty$, y como $\displaystyle \lim_{t \to -\infty} e^{t} = 0$, el denominador $1 + e^{1/x} \to 1$. Entonces $\displaystyle \lim_{x \to 0^-} f(x) = \frac{1}{1} = 1$.
4. Como $0 \neq 1$, el límite bilateral no existe.

**Resultado final:** $\displaystyle \lim_{x \to 0^-} f(x) = 1$, $\displaystyle \lim_{x \to 0^+} f(x) = 0$; el límite en $x = 0$ no existe.
