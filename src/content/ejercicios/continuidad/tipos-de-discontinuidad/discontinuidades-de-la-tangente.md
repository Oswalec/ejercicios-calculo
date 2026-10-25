---
titulo: "Discontinuidades de la función tangente"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "intermedio"
metodo: "Ceros del coseno y límites laterales"
orden: 10
grafica:
  ubicacion: "solucion"
  x: [-4.8, 4.8]
  y: [-5, 5]
  curvas:
    - expr: "tan(x)"
      etiqueta: 'f(x) = \tan x'
  descripcion: "Ramas de la tangente separadas por asíntotas verticales en x = ±π/2 y x = ±3π/2, aproximadamente ±1.57 y ±4.71."
---

## Enunciado

¿Dónde es discontinua $f(x) = \tan x$ y de qué tipo son sus discontinuidades?

## Solución

1. $\tan x = \frac{\operatorname{sen} x}{\cos x}$ es cociente de funciones continuas, así que es continua donde $\cos x \neq 0$.
2. $\cos x = 0$ cuando $x = \frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$. En esos puntos $f$ no está definida.
3. En $x = \frac{\pi}{2}$: $\operatorname{sen} x \to 1$, y $\cos x \to 0^+$ por la izquierda y $\cos x \to 0^-$ por la derecha. Entonces $\tan x \to +\infty$ por la izquierda y $-\infty$ por la derecha.
4. Lo mismo ocurre en cada $\frac{\pi}{2} + k\pi$ (la tangente tiene período $\pi$): todas las discontinuidades son **infinitas**, con asíntotas verticales.

**Resultado final:** Discontinuidades infinitas en $x = \dfrac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$; en el resto es continua.
