---
titulo: "Posición a partir de la aceleración"
tema: "integrales"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Integración sucesiva con condiciones iniciales"
orden: 8
---

## Enunciado

Una partícula tiene aceleración $a(t) = 6t$ m/s², velocidad inicial $v(0) = 2$ m/s y posición inicial $s(0) = 1$ m. Halla $v(t)$ y $s(t)$.

## Solución

1. La velocidad es una antiderivada de la aceleración: $v(t) = \int 6t\,dt = 3t^2 + C_1$. Con $v(0) = 2$: $C_1 = 2$.
2. La posición es una antiderivada de la velocidad: $s(t) = \int(3t^2 + 2)\,dt = t^3 + 2t + C_2$.
3. Con $s(0) = 1$: $C_2 = 1$.
4. Por ejemplo, en $t = 2$ s: $v(2) = 14$ m/s y $s(2) = 8 + 4 + 1 = 13$ m.

**Resultado final:** $v(t) = 3t^2 + 2$ y $s(t) = t^3 + 2t + 1$
