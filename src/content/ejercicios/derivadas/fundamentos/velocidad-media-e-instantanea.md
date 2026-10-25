---
titulo: "Velocidad media e instantánea"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Cociente de incrementos y límite"
orden: 2
---

## Enunciado

Un objeto recorre $s(t) = 5t^2$ metros en $t$ segundos. Calcula su velocidad media entre $t = 1$ y $t = 3$, y su velocidad instantánea en $t = 2$.

## Solución

1. Velocidad media: $v_m = \frac{s(3) - s(1)}{3 - 1} = \frac{45 - 5}{2} = 20$ m/s.
2. La velocidad instantánea en $t = 2$ es el límite de las velocidades medias en $[2, 2 + h]$ cuando $h \to 0$: $v(2) = \displaystyle \lim_{h \to 0} \frac{s(2 + h) - s(2)}{h}$.
3. $s(2 + h) = 5(4 + 4h + h^2) = 20 + 20h + 5h^2$, así que $\frac{s(2 + h) - s(2)}{h} = \frac{20h + 5h^2}{h} = 20 + 5h$ para $h \neq 0$.
4. Cuando $h \to 0$: $v(2) = 20$ m/s.

**Resultado final:** Velocidad media en $[1, 3]$: $20$ m/s; velocidad instantánea en $t = 2$: $20$ m/s.
