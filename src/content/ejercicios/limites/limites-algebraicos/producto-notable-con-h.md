---
titulo: "Indeterminación 0/0 con un binomio al cuadrado"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "basico"
metodo: "Desarrollo de producto notable"
orden: 5
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{h \to 0} \frac{(3 + h)^2 - 9}{h}
$$

## Solución

1. Al sustituir $h = 0$: numerador $9 - 9 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Desarrollamos el binomio al cuadrado: $(3 + h)^2 = 9 + 6h + h^2$.
3. El numerador queda $9 + 6h + h^2 - 9 = 6h + h^2 = h(6 + h)$.
4. Para $h \neq 0$ simplificamos: $\frac{h(6 + h)}{h} = 6 + h$.
5. Sustituimos $h = 0$ en la expresión continua: $6 + 0 = 6$.

**Resultado final:** $\displaystyle \lim_{h \to 0} \frac{(3 + h)^2 - 9}{h} = 6$
