---
titulo: "Aproximar una raíz por bisección"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Bisección basada en el teorema de Bolzano"
orden: 8
---

## Enunciado

La ecuación $x^3 - x - 1 = 0$ tiene una raíz en $[1, 2]$. Aplica el método de bisección hasta localizarla en un intervalo de longitud menor que $0.1$.

## Solución

1. $f(x) = x^3 - x - 1$ es continua; $f(1) = -1 < 0$ y $f(2) = 5 > 0$. Por Bolzano hay una raíz en $(1, 2)$. Cada paso evalúa el punto medio y conserva la mitad donde hay cambio de signo.
2. $f(1.5) = 3.375 - 1.5 - 1 = 0.875 > 0$, así que la raíz está en $(1, 1.5)$. Luego $f(1.25) = 1.953125 - 2.25 = -0.296875 < 0$, y la raíz está en $(1.25, 1.5)$.
3. $f(1.375) \approx 2.5996 - 2.375 = 0.2246 > 0$, y la raíz está en $(1.25, 1.375)$.
4. $f(1.3125) \approx 2.2610 - 2.3125 = -0.0515 < 0$, y la raíz está en $(1.3125, 1.375)$, de longitud $0.0625 < 0.1$.
5. Cualquier punto de ese intervalo aproxima la raíz con error menor que $0.07$; redondeando a una cifra decimal, la raíz es $\approx 1.3$.

**Resultado final:** La raíz está en $(1.3125,\ 1.375)$; aproximadamente $1.3$.
