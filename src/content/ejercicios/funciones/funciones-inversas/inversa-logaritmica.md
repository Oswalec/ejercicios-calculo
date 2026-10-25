---
titulo: "Inversa de una función logarítmica"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "basico"
metodo: "Despeje con la exponencial"
orden: 6
---

## Enunciado

Halla la inversa de $f(x) = \ln(x - 2) + 3$, con dominio $(2, \infty)$.

## Solución

1. $f$ es creciente en $(2, \infty)$, así que es inyectiva. Su rango es $\mathbb{R}$, porque el logaritmo toma todos los valores reales.
2. Despejamos: $y = \ln(x - 2) + 3$, es decir, $\ln(x - 2) = y - 3$.
3. Aplicamos la exponencial: $x - 2 = e^{y - 3}$, de donde $x = e^{y - 3} + 2$.
4. Intercambiamos variables: $f^{-1}(x) = e^{x - 3} + 2$, con dominio $\mathbb{R}$ y rango $(2, \infty)$.

**Resultado final:** $f^{-1}(x) = e^{x - 3} + 2$
