---
titulo: "Nivel de producción con costo promedio mínimo"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "basico"
metodo: "Minimización del costo promedio"
orden: 7
---

## Enunciado

El costo total de producir $x$ unidades es $C(x) = x^2 + 4x + 100$ soles. ¿Para qué producción es mínimo el costo promedio por unidad?

## Solución

1. Costo promedio: $\overline{C}(x) = \frac{C(x)}{x} = x + 4 + \frac{100}{x}$, con $x > 0$.
2. $\overline{C}\,'(x) = 1 - \frac{100}{x^2} = 0$, de donde $x^2 = 100$ y $x = 10$.
3. $\overline{C}\,''(x) = \frac{200}{x^3} > 0$: es un mínimo.
4. $\overline{C}(10) = 10 + 4 + 10 = 24$ soles por unidad.

**Resultado final:** $x = 10$ unidades, con costo promedio mínimo de S/ 24 por unidad.
