---
titulo: "Derivabilidad de una función por partes"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Continuidad y derivadas laterales en el empalme"
orden: 7
---

## Enunciado

¿Es derivable en $x = 1$ la función

$$
f(x) = \begin{cases} x^2, & x \le 1 \\ 2x - 1, & x > 1 \end{cases}
$$

## Solución

1. Primero, continuidad: $f(1) = 1$, $\displaystyle \lim_{x \to 1^-} x^2 = 1$ y $\displaystyle \lim_{x \to 1^+} (2x - 1) = 1$. Es continua (condición necesaria).
2. Derivada por la izquierda: $f'_-(1) = \displaystyle \lim_{h \to 0^-} \frac{(1 + h)^2 - 1}{h} = \lim_{h \to 0^-} (2 + h) = 2$.
3. Derivada por la derecha: $f'_+(1) = \displaystyle \lim_{h \to 0^+} \frac{2(1 + h) - 1 - 1}{h} = \lim_{h \to 0^+} \frac{2h}{h} = 2$.
4. Las derivadas laterales coinciden, así que $f$ es derivable en $1$, con $f'(1) = 2$.

**Resultado final:** $f$ es derivable en $x = 1$ y $f'(1) = 2$.
