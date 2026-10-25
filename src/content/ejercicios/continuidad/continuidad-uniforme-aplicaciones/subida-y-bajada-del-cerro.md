---
titulo: "Aplicación: el mismo lugar a la misma hora"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "intermedio"
metodo: "Teorema del valor intermedio aplicado a una diferencia"
orden: 6
---

## Enunciado

Una excursionista sube un cerro por un sendero entre las 6:00 y las 12:00 de un día. Al día siguiente baja por el mismo sendero entre las 6:00 y las 12:00. Demuestra que hay un punto del sendero por el que pasa a la misma hora ambos días.

## Solución

1. Sea $L$ la longitud del sendero, $s(t)$ la distancia recorrida desde la base durante la subida y $b(t)$ la distancia a la base durante la bajada, con $t \in [6, 12]$ horas. El movimiento es continuo, así que $s$ y $b$ son continuas.
2. Datos: $s(6) = 0$, $s(12) = L$, $b(6) = L$ y $b(12) = 0$.
3. Definimos $h(t) = s(t) - b(t)$, continua en $[6, 12]$, con $h(6) = -L < 0$ y $h(12) = L > 0$.
4. Por el teorema de Bolzano existe $c \in (6, 12)$ con $h(c) = 0$, es decir, $s(c) = b(c)$: a la hora $c$ está en el mismo punto del sendero ambos días.

**Resultado final:** Existe una hora $c \in (6, 12)$ en la que ocupa el mismo punto del sendero los dos días.
