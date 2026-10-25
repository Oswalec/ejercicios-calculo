---
titulo: "El límite existe pero no coincide con el valor"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "basico"
metodo: "Verificación de las tres condiciones de continuidad"
orden: 3
---

## Enunciado

Sea

$$
f(x) = \begin{cases} \dfrac{x^2 - 4}{x - 2}, & x \neq 2 \\ 3, & x = 2 \end{cases}
$$

¿Es continua en $x = 2$?

## Solución

1. Condición (i): $f(2) = 3$ está definido.
2. Condición (ii): para $x \neq 2$, $\frac{x^2 - 4}{x - 2} = x + 2$, así que $\displaystyle \lim_{x \to 2} f(x) = 4$. El límite existe.
3. Condición (iii): $\displaystyle \lim_{x \to 2} f(x) = 4 \neq 3 = f(2)$. Falla.
4. La discontinuidad es removible: redefiniendo $f(2) = 4$ la función sería continua.

**Resultado final:** $f$ no es continua en $x = 2$, porque $\displaystyle \lim_{x \to 2} f(x) = 4 \neq f(2) = 3$.
