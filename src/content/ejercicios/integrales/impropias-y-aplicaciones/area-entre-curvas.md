---
titulo: "Área entre dos curvas"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "intermedio"
metodo: "Integral de la diferencia de las curvas"
orden: 1
---

## Enunciado

Calcula el área de la región encerrada entre las curvas

$$
y = x \quad \text{e} \quad y = x^2
$$

## Solución

1. Hallamos los puntos de corte igualando: $x = x^2$, es decir, $x^2 - x = x(x - 1) = 0$, de donde $x = 0$ y $x = 1$.
2. Vemos qué curva está arriba en $(0, 1)$: por ejemplo en $x = \frac{1}{2}$, la recta $y = x$ vale $\frac{1}{2}$ y la parábola $y = x^2$ vale $\frac{1}{4}$. La recta está arriba.
3. El área es la integral de la curva de arriba menos la de abajo: $A = \int_{0}^{1} \left(x - x^2\right)\,dx$.
4. Integramos: $\left[\frac{x^2}{2} - \frac{x^3}{3}\right]_{0}^{1} = \frac{1}{2} - \frac{1}{3} - 0$.
5. Operamos: $\frac{3}{6} - \frac{2}{6} = \frac{1}{6}$ unidades cuadradas.

**Resultado final:** $A = \dfrac{1}{6}$
