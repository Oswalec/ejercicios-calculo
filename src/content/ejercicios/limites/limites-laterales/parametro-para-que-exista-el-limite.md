---
titulo: "Parámetro para que exista el límite bilateral"
tema: "limites"
seccion: "limites-laterales"
dificultad: "intermedio"
metodo: "Igualación de límites laterales"
orden: 8
---

## Enunciado

Halla el valor de $a$ para que exista $\displaystyle \lim_{x \to 1} f(x)$, donde

$$
f(x) = \begin{cases} ax + 3, & x < 1 \\ 2x^2 - a, & x > 1 \end{cases}
$$

y calcula el valor del límite.

## Solución

1. El límite bilateral existe si y solo si los límites laterales existen y son iguales.
2. Por la izquierda: $\displaystyle \lim_{x \to 1^-} (ax + 3) = a + 3$.
3. Por la derecha: $\displaystyle \lim_{x \to 1^+} (2x^2 - a) = 2 - a$.
4. Igualamos: $a + 3 = 2 - a$, de donde $2a = -1$ y $a = -\frac{1}{2}$.
5. Con ese valor, ambos límites laterales valen $-\frac{1}{2} + 3 = \frac{5}{2}$. Comprobación por la derecha: $2 - \left(-\frac{1}{2}\right) = \frac{5}{2}$.

**Resultado final:** $a = -\dfrac{1}{2}$ y $\displaystyle \lim_{x \to 1} f(x) = \dfrac{5}{2}$
