---
titulo: "Aplicación: continuidad de una tarifa de envío"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "basico"
metodo: "Continuidad en el punto de cambio de tarifa"
orden: 7
---

## Enunciado

Una empresa cobra por enviar un paquete de $x$ kg:

$$
C(x) = \begin{cases} 10, & 0 < x \le 5 \\ 10 + 2(x - 5), & x > 5 \end{cases}
$$

(en soles). ¿Es continua la tarifa en $x = 5$? ¿Y si el segundo tramo fuera $12 + 2(x - 5)$?

## Solución

1. $C(5) = 10$ y $\displaystyle \lim_{x \to 5^-} C(x) = 10$.
2. Por la derecha: $\displaystyle \lim_{x \to 5^+} \left[10 + 2(x - 5)\right] = 10$. Los tres valores coinciden: $C$ es continua en $5$. Un paquete de $5.01$ kg cuesta casi lo mismo que uno de $5$ kg.
3. Con el segundo tramo $12 + 2(x - 5)$, el límite por la derecha sería $12 \neq 10$: habría un salto de S/ 2.
4. En ese caso, un paquete de $5.01$ kg costaría S/ 12.02 y uno de $5$ kg S/ 10. Es una tarifa discontinua, que penaliza pasarse un poco del límite.

**Resultado final:** La tarifa dada es continua en $x = 5$; con $12 + 2(x - 5)$ tendría un salto de S/ 2.
