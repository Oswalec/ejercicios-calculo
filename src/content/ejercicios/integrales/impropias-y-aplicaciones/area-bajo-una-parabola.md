---
titulo: "Área bajo una parábola y valor promedio"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "basico"
metodo: "Integral definida y simetría par"
orden: 5
grafica:
  ubicacion: "solucion"
  x: [-3, 3]
  y: [-1, 5]
  curvas:
    - expr: "4 - x^2"
      etiqueta: 'y = 4 - x^2'
    - expr: "8/3"
      etiqueta: 'valor promedio: y = 8/3'
      estilo: "referencia"
  descripcion: "La parábola y = 4 − x² corta al eje x en -2 y 2; el área bajo ella es 32/3 y su valor promedio en [-2, 2] es 8/3 (línea punteada)."
---

## Enunciado

Calcula el área de la región entre la parábola $y = 4 - x^2$ y el eje $x$, y el valor promedio de la función en $[-2, 2]$.

## Solución

1. Cortes con el eje $x$: $4 - x^2 = 0$, es decir, $x = \pm 2$. En $[-2, 2]$ se cumple $4 - x^2 \ge 0$.
2. Área: $\int_{-2}^{2}\left(4 - x^2\right)dx$. Como el integrando es par, es igual a $2\int_0^2\left(4 - x^2\right)dx = 2\left[4x - \frac{x^3}{3}\right]_0^2 = 2\left(8 - \frac{8}{3}\right) = \frac{32}{3}$.
3. Valor promedio: $\bar{f} = \frac{1}{b - a}\int_a^b f(x)\,dx = \frac{1}{4} \cdot \frac{32}{3} = \frac{8}{3}$.
4. Interpretación: un rectángulo de base $4$ y altura $\frac{8}{3}$ tiene la misma área que la región.

**Resultado final:** Área $= \dfrac{32}{3}$; valor promedio $= \dfrac{8}{3}$.
