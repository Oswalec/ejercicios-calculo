---
titulo: "Completar el cuadrado para obtener un arcotangente"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "basico"
metodo: "Completación de cuadrados"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{x^2 + 4x + 5}$.

## Solución

1. El denominador no se factoriza en los reales (discriminante $16 - 20 < 0$). Completamos el cuadrado: $x^2 + 4x + 5 = (x + 2)^2 + 1$.
2. Con $u = x + 2$, $du = dx$: $\int \frac{du}{u^2 + 1} = \arctan u$.
3. Resultado: $\arctan(x + 2) + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{x^2 + 4x + 5} = \arctan(x + 2) + C$
