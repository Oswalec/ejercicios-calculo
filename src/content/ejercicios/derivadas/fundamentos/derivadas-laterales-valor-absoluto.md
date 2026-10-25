---
titulo: "Derivadas laterales de |x| en el origen"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Derivadas laterales por definición"
orden: 4
---

## Enunciado

Calcula las derivadas laterales de $f(x) = |x|$ en $x = 0$. ¿Es derivable allí?

## Solución

1. Derivada por la derecha: $f'_+(0) = \displaystyle \lim_{h \to 0^+} \frac{|h| - 0}{h}$. Para $h > 0$, $|h| = h$, así que el cociente vale $1$ y $f'_+(0) = 1$.
2. Derivada por la izquierda: $f'_-(0) = \displaystyle \lim_{h \to 0^-} \frac{|h|}{h}$. Para $h < 0$, $|h| = -h$, así que el cociente vale $-1$ y $f'_-(0) = -1$.
3. $f$ es derivable en $0$ si y solo si ambas derivadas laterales existen y son iguales. Aquí $1 \neq -1$.
4. Geométricamente, la gráfica tiene un «pico» en el origen: no hay una única recta tangente.

**Resultado final:** $f'_-(0) = -1$ y $f'_+(0) = 1$; $|x|$ no es derivable en $x = 0$.
