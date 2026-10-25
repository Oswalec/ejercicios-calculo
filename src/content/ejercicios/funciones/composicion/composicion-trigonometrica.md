---
titulo: "Composición con una función trigonométrica"
tema: "funciones"
seccion: "composicion"
dificultad: "basico"
metodo: "Composición e identidad del seno de una suma"
orden: 6
---

## Enunciado

Sean $f(x) = \operatorname{sen} x$ y $g(x) = 2x + \pi$. Halla $(f \circ g)(x)$ y simplifícala.

## Solución

1. $(f \circ g)(x) = f(2x + \pi) = \operatorname{sen}(2x + \pi)$.
2. Por la fórmula del seno de una suma: $\operatorname{sen}(2x + \pi) = \operatorname{sen}(2x)\cos\pi + \cos(2x)\operatorname{sen}\pi$.
3. Como $\cos\pi = -1$ y $\operatorname{sen}\pi = 0$: $\operatorname{sen}(2x + \pi) = -\operatorname{sen}(2x)$.
4. El dominio es $\mathbb{R}$.

**Resultado final:** $(f \circ g)(x) = -\operatorname{sen}(2x)$
