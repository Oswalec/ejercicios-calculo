---
titulo: "Una tarifa modelada con una función por partes"
tema: "funciones"
seccion: "otras-propiedades"
dificultad: "basico"
metodo: "Construcción y evaluación de una función por partes"
orden: 1
---

## Enunciado

Un estacionamiento cobra S/ 2 por las primeras 3 horas (o fracción) y S/ 0.50 por cada hora adicional, cobrada de forma proporcional. Escribe el costo $C(t)$ para $t > 0$ horas y calcula $C(2)$ y $C(5)$.

## Solución

1. Hay dos regímenes: hasta $3$ horas el costo es fijo; después se suma $0.50$ por cada hora que excede de $3$.
2. Para $0 < t \le 3$: $C(t) = 2$. Para $t > 3$: las horas adicionales son $t - 3$, así que $C(t) = 2 + 0.5(t - 3)$.
3. $C(2)$: como $2 \le 3$, $C(2) = 2$.
4. $C(5)$: como $5 > 3$, $C(5) = 2 + 0.5(2) = 3$.

**Resultado final:** $C(t) = \begin{cases} 2, & 0 < t \le 3 \\ 2 + 0.5(t - 3), & t > 3 \end{cases}$; $C(2) = 2$ y $C(5) = 3$ soles.
