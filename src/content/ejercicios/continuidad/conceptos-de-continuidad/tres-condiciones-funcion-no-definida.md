---
titulo: "Las tres condiciones: función no definida en el punto"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "basico"
metodo: "Verificación de las tres condiciones de continuidad"
orden: 1
---

## Enunciado

¿Es continua en $x = 1$ la función

$$
f(x) = \frac{x^2 - 1}{x - 1}\ ?
$$

## Solución

1. $f$ es continua en $a$ si se cumplen tres condiciones: (i) $f(a)$ está definido; (ii) $\displaystyle \lim_{x \to a} f(x)$ existe; (iii) $\displaystyle \lim_{x \to a} f(x) = f(a)$.
2. Condición (i): al sustituir $x = 1$ el denominador se anula, así que $f(1)$ no está definido. La condición falla.
3. Basta con que falle una condición para que $f$ sea discontinua en $x = 1$.
4. Observación: el límite sí existe, $\displaystyle \lim_{x \to 1} \frac{(x - 1)(x + 1)}{x - 1} = \lim_{x \to 1} (x + 1) = 2$. Por eso la discontinuidad es removible: se elimina definiendo $f(1) = 2$.

**Resultado final:** $f$ no es continua en $x = 1$, porque $f(1)$ no está definido (el límite vale $2$).
