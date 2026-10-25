---
titulo: "Raíz de una ecuación trascendente"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Teorema de Bolzano aplicado a la diferencia"
orden: 3
---

## Enunciado

Demuestra que la ecuación $e^{x} = 3 - x$ tiene una solución en $(0, 1)$.

## Solución

1. Pasamos todo a un lado: definimos $g(x) = e^{x} + x - 3$. Las soluciones de la ecuación son los ceros de $g$.
2. $g$ es suma de funciones continuas, así que es continua en $[0, 1]$.
3. $g(0) = 1 + 0 - 3 = -2 < 0$ y $g(1) = e + 1 - 3 = e - 2 > 0$, porque $e > 2$.
4. Por el teorema de Bolzano, existe $c \in (0, 1)$ con $g(c) = 0$, es decir, $e^{c} = 3 - c$.

**Resultado final:** Existe $c \in (0, 1)$ que satisface $e^{c} = 3 - c$.
