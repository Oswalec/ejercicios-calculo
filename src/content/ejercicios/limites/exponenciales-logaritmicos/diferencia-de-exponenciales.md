---
titulo: "Diferencia de dos exponenciales"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "intermedio"
metodo: "Separación en límites fundamentales exponenciales"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{e^{2x} - e^{x}}{x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{1 - 1}{0} = \frac{0}{0}$.
2. Sumamos y restamos $1$ en el numerador: $e^{2x} - e^{x} = (e^{2x} - 1) - (e^{x} - 1)$.
3. Separamos: $\frac{e^{2x} - e^{x}}{x} = 2 \cdot \frac{e^{2x} - 1}{2x} - \frac{e^{x} - 1}{x}$.
4. Por el límite fundamental $\displaystyle \lim_{u \to 0} \frac{e^{u} - 1}{u} = 1$ (con $u = 2x$ y con $u = x$), ambos cocientes tienden a $1$. Como los dos límites existen, el límite de la diferencia es la diferencia de los límites.
5. Resultado: $2 \cdot 1 - 1 = 1$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{e^{2x} - e^{x}}{x} = 1$
