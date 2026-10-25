---
titulo: "Reflexiones respecto de los ejes"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "basico"
metodo: "Reflexión −f(x) y f(−x)"
orden: 3
grafica:
  ubicacion: "solucion"
  x: [-6, 6]
  y: [-3, 3]
  curvas:
    - expr: "sqrt(x)"
      etiqueta: 'f(x) = \sqrt{x}'
      estilo: "referencia"
    - expr: "-sqrt(x)"
      etiqueta: 'g(x) = -\sqrt{x}'
    - expr: "sqrt(-x)"
      etiqueta: 'h(x) = \sqrt{-x}'
      estilo: "secundaria"
  descripcion: "f está en el primer cuadrante; g es su reflejo respecto del eje x (cuarto cuadrante) y h su reflejo respecto del eje y (segundo cuadrante)."
---

## Enunciado

Sea $f(x) = \sqrt{x}$. Describe las gráficas de $g(x) = -\sqrt{x}$ y $h(x) = \sqrt{-x}$, con sus dominios y rangos.

## Solución

1. $g(x) = -f(x)$ cambia el signo de cada valor: cada punto $(x, y)$ pasa a $(x, -y)$. Es la reflexión respecto del **eje $x$**.
2. $g$ tiene el mismo dominio que $f$, $[0, \infty)$, y su rango es $(-\infty, 0]$.
3. $h(x) = f(-x)$ evalúa $f$ en el opuesto: cada punto $(x, y)$ pasa a $(-x, y)$. Es la reflexión respecto del **eje $y$**.
4. $h$ exige $-x \ge 0$, así que su dominio es $(-\infty, 0]$, y su rango sigue siendo $[0, \infty)$.

**Resultado final:** $g$ refleja $f$ en el eje $x$ (dominio $[0, \infty)$, rango $(-\infty, 0]$); $h$ la refleja en el eje $y$ (dominio $(-\infty, 0]$, rango $[0, \infty)$).
