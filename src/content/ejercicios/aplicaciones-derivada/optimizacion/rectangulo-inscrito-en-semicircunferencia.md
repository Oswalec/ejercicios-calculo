---
titulo: "Rectángulo inscrito en una semicircunferencia"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "avanzado"
metodo: "Modelación geométrica y maximización de una función auxiliar"
orden: 8
---

## Enunciado

Halla el rectángulo de área máxima inscrito en la semicircunferencia $y = \sqrt{25 - x^2}$, con un lado sobre el eje $x$.

## Solución

1. Por simetría, los vértices son $(\pm x, 0)$ y $\left(\pm x, \sqrt{25 - x^2}\right)$, con $0 < x < 5$. Área: $A(x) = 2x\sqrt{25 - x^2}$.
2. Como $A > 0$, maximizar $A$ equivale a maximizar $A^2 = 4x^2(25 - x^2)$. Con $u = x^2 \in (0, 25)$: $h(u) = 4(25u - u^2)$.
3. $h'(u) = 4(25 - 2u) = 0$ en $u = \frac{25}{2}$, y $h''(u) = -8 < 0$: máximo.
4. Entonces $x = \frac{5}{\sqrt{2}}$ y la altura es $\sqrt{25 - \frac{25}{2}} = \frac{5}{\sqrt{2}}$. Área: $2 \cdot \frac{5}{\sqrt{2}} \cdot \frac{5}{\sqrt{2}} = 25$.

**Resultado final:** Base $5\sqrt{2}$ y altura $\dfrac{5}{\sqrt{2}}$; área máxima $25$.
