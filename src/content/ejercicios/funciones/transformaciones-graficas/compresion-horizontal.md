---
titulo: "Compresión horizontal f(bx)"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "basico"
metodo: "Compresión horizontal"
orden: 5
grafica:
  ubicacion: "solucion"
  x: [-1, 7]
  y: [-1.5, 1.5]
  curvas:
    - expr: "sen(x)"
      etiqueta: 'f(x) = \operatorname{sen} x'
      estilo: "referencia"
    - expr: "sen(2x)"
      etiqueta: 'g(x) = \operatorname{sen}(2x)'
  descripcion: "g completa dos ondas en el intervalo de 0 a 2π, donde f completa una: su período es π y su rango sigue siendo [-1, 1]."
---

## Enunciado

Compara la gráfica de $g(x) = \operatorname{sen}(2x)$ con la de $f(x) = \operatorname{sen} x$: período, ceros y rango.

## Solución

1. $g(x) = f(2x)$: el valor que $f$ toma en $x$, $g$ lo toma en $\frac{x}{2}$. Cada punto $(x, y)$ pasa a $\left(\frac{x}{2}, y\right)$. Es una **compresión horizontal** de factor $\frac{1}{2}$.
2. El período pasa de $2\pi$ a $\frac{2\pi}{2} = \pi$.
3. Los ceros pasan de $x = k\pi$ a $2x = k\pi$, es decir, $x = \frac{k\pi}{2}$.
4. El rango no cambia, $[-1, 1]$, porque la transformación solo actúa sobre $x$.

**Resultado final:** Período $\pi$, ceros en $x = \dfrac{k\pi}{2}$, rango $[-1, 1]$; es una compresión horizontal de factor $\dfrac{1}{2}$.
