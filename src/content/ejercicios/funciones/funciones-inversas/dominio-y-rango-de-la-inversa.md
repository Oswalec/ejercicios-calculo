---
titulo: "Dominio y rango de la inversa de una función radical"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "intermedio"
metodo: "Intercambio de dominio y rango"
orden: 8
---

## Enunciado

Sea $f(x) = \sqrt{x - 1} + 2$. Halla $f^{-1}$ con su dominio y su rango.

## Solución

1. $\operatorname{Dom} f = [1, \infty)$. Como $\sqrt{x - 1} \ge 0$ toma todos los valores no negativos, $\operatorname{Ran} f = [2, \infty)$. $f$ es creciente, así que es inyectiva.
2. Despejamos: $y - 2 = \sqrt{x - 1}$, con $y \ge 2$. Elevamos al cuadrado: $(y - 2)^2 = x - 1$, de donde $x = (y - 2)^2 + 1$.
3. Intercambiamos variables: $f^{-1}(x) = (x - 2)^2 + 1$.
4. El dominio de $f^{-1}$ es $\operatorname{Ran} f = [2, \infty)$, no todo $\mathbb{R}$, aunque la fórmula esté definida en todo $\mathbb{R}$. Su rango es $\operatorname{Dom} f = [1, \infty)$.

**Resultado final:** $f^{-1}(x) = (x - 2)^2 + 1$, con dominio $[2, \infty)$ y rango $[1, \infty)$.
