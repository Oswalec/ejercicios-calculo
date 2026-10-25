---
titulo: "Volumen de revolución por capas cilíndricas"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "intermedio"
metodo: "Método de capas: V = 2π∫x f(x) dx"
orden: 8
---

## Enunciado

La región bajo $y = x - x^2$ y sobre el eje $x$ gira alrededor del eje $y$. Calcula el volumen.

## Solución

1. La región está entre $x = 0$ y $x = 1$, donde $x - x^2 \ge 0$. Al girar alrededor del eje $y$, cada franja vertical en $x$ genera una capa cilíndrica de radio $x$ y altura $x - x^2$.
2. Método de capas: $V = 2\pi\int_0^1 x\left(x - x^2\right)dx = 2\pi\int_0^1\left(x^2 - x^3\right)dx$.
3. $2\pi\left(\frac{1}{3} - \frac{1}{4}\right) = 2\pi \cdot \frac{1}{12} = \frac{\pi}{6}$.
4. Con discos habría que despejar $x$ en función de $y$ (dos ramas); las capas evitan ese paso.

**Resultado final:** $V = \dfrac{\pi}{6}$ unidades cúbicas.
