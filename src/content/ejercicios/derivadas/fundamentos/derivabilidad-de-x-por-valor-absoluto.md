---
titulo: "Derivabilidad de x|x| en el origen"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Definición de derivada por límite"
orden: 5
---

## Enunciado

¿Es derivable $f(x) = x|x|$ en $x = 0$? Si lo es, calcula $f'(0)$.

## Solución

1. $f(0) = 0$. Por definición: $f'(0) = \displaystyle \lim_{h \to 0} \frac{h|h| - 0}{h}$.
2. Para $h \neq 0$: $\frac{h|h|}{h} = |h|$.
3. $\displaystyle \lim_{h \to 0} |h| = 0$, así que el límite existe.
4. A diferencia de $|x|$, multiplicar por $x$ «suaviza» el pico: la gráfica es $x^2$ a la derecha y $-x^2$ a la izquierda, ambas con pendiente $0$ en el origen.

**Resultado final:** $f$ es derivable en $0$ y $f'(0) = 0$.
