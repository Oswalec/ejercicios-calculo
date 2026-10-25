---
titulo: "Distancia mínima de un punto a una curva"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "intermedio"
metodo: "Minimización del cuadrado de la distancia"
orden: 5
---

## Enunciado

Halla el punto de la curva $y = \sqrt{x}$ más cercano al punto $(4, 0)$ y la distancia mínima.

## Solución

1. Un punto de la curva es $(x, \sqrt{x})$, con $x \ge 0$. Su distancia a $(4, 0)$ es $D = \sqrt{(x - 4)^2 + x}$.
2. Minimizar $D$ equivale a minimizar $D^2$, porque la raíz es creciente: $g(x) = (x - 4)^2 + x$.
3. $g'(x) = 2(x - 4) + 1 = 2x - 7 = 0$ en $x = \frac{7}{2}$. Como $g''(x) = 2 > 0$, es un mínimo. Además, en el extremo $x = 0$, $g(0) = 16$ es mayor.
4. Punto: $\left(\frac{7}{2}, \sqrt{\frac{7}{2}}\right)$. Distancia: $D = \sqrt{\frac{1}{4} + \frac{7}{2}} = \sqrt{\frac{15}{4}} = \frac{\sqrt{15}}{2} \approx 1.94$.

**Resultado final:** El punto más cercano es $\left(\dfrac{7}{2}, \sqrt{\dfrac{7}{2}}\right)$, a distancia $\dfrac{\sqrt{15}}{2} \approx 1.94$.
