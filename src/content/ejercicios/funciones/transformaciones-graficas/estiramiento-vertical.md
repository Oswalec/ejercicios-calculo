---
titulo: "Estiramiento vertical a·f(x)"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "basico"
metodo: "Estiramiento vertical"
orden: 4
grafica:
  ubicacion: "solucion"
  x: [-1, 7]
  y: [-3.5, 3.5]
  curvas:
    - expr: "sen(x)"
      etiqueta: 'f(x) = \operatorname{sen} x'
      estilo: "referencia"
    - expr: "3 sen(x)"
      etiqueta: 'g(x) = 3\operatorname{sen} x'
  descripcion: "g oscila entre -3 y 3 con los mismos ceros y el mismo período 2π que f, que oscila entre -1 y 1."
---

## Enunciado

Compara la gráfica de $g(x) = 3\operatorname{sen} x$ con la de $f(x) = \operatorname{sen} x$: amplitud, rango y período.

## Solución

1. $g(x) = 3f(x)$ multiplica cada valor por $3$: cada punto $(x, y)$ pasa a $(x, 3y)$. Es un **estiramiento vertical** de factor $3$.
2. La amplitud pasa de $1$ a $3$ y el rango de $[-1, 1]$ a $[-3, 3]$.
3. Los ceros no cambian ($3 \cdot 0 = 0$): siguen en $x = k\pi$.
4. El período no cambia, porque la transformación no actúa sobre $x$: sigue siendo $2\pi$.

**Resultado final:** Amplitud $3$, rango $[-3, 3]$, período $2\pi$; es un estiramiento vertical de factor $3$.
