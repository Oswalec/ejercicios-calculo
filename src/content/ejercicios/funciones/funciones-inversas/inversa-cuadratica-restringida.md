---
titulo: "Inversa de una cuadrática con dominio restringido"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "intermedio"
metodo: "Completación de cuadrados y elección de la raíz según el dominio"
orden: 4
---

## Enunciado

Sea $f(x) = x^2 - 4x + 1$ con dominio $[2, \infty)$. Halla $f^{-1}$, su dominio y su rango.

## Solución

1. Completamos cuadrados: $f(x) = (x - 2)^2 - 3$. En $[2, \infty)$ la función es creciente y, por tanto, inyectiva. Su rango es $[-3, \infty)$.
2. Despejamos: $y = (x - 2)^2 - 3$, es decir, $(x - 2)^2 = y + 3$, de donde $x - 2 = \pm\sqrt{y + 3}$.
3. Como $x \ge 2$, se cumple $x - 2 \ge 0$, y se toma la raíz positiva: $x = 2 + \sqrt{y + 3}$.
4. Intercambiamos variables: $f^{-1}(x) = 2 + \sqrt{x + 3}$. Su dominio es el rango de $f$, $[-3, \infty)$, y su rango es el dominio de $f$, $[2, \infty)$.

**Resultado final:** $f^{-1}(x) = 2 + \sqrt{x + 3}$, con dominio $[-3, \infty)$ y rango $[2, \infty)$.
