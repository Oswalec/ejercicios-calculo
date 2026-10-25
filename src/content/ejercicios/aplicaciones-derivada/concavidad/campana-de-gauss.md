---
titulo: "Concavidad de la campana e^(−x²)"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "intermedio"
metodo: "Signo de la segunda derivada"
orden: 10
grafica:
  ubicacion: "solucion"
  x: [-3, 3]
  y: [-0.2, 1.2]
  curvas:
    - expr: "e^(-x^2)"
      etiqueta: 'f(x) = e^{-x^2}'
  puntos:
    - { x: 0, y: 1, etiqueta: "(0, 1)" }
    - { x: -0.7071, y: 0.6065 }
    - { x: 0.7071, y: 0.6065 }
  descripcion: "Curva en forma de campana con máximo en (0, 1) y puntos de inflexión en x = ±1/√2 ≈ ±0.71, a altura e^(-1/2) ≈ 0.61."
---

## Enunciado

Estudia la concavidad de $f(x) = e^{-x^2}$ y halla sus puntos de inflexión.

## Solución

1. $f'(x) = -2xe^{-x^2}$.
2. Por la regla del producto: $f''(x) = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = (4x^2 - 2)e^{-x^2}$.
3. Como $e^{-x^2} > 0$, el signo lo da $4x^2 - 2$: negativo si $|x| < \frac{1}{\sqrt{2}}$ (cóncava hacia abajo) y positivo si $|x| > \frac{1}{\sqrt{2}}$ (cóncava hacia arriba).
4. Inflexiones en $x = \pm\frac{1}{\sqrt{2}}$, con $f = e^{-1/2} = \frac{1}{\sqrt{e}}$. El máximo está en $(0, 1)$, y la curva es la «campana» de la distribución normal.

**Resultado final:** Inflexiones en $\left(\pm\dfrac{1}{\sqrt{2}}, \dfrac{1}{\sqrt{e}}\right)$; cóncava hacia abajo en $|x| < \dfrac{1}{\sqrt{2}}$ y hacia arriba en $|x| > \dfrac{1}{\sqrt{2}}$.
