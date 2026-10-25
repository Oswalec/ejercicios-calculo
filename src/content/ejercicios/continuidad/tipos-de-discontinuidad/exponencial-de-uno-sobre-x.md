---
titulo: "Discontinuidad esencial de e^(1/x)"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "avanzado"
metodo: "Límites laterales de la exponencial"
orden: 9
---

## Enunciado

Clasifica la discontinuidad de $f(x) = e^{1/x}$ en $x = 0$.

## Solución

1. $f(0)$ no está definido, porque $\frac{1}{x}$ no existe en $0$.
2. Por la derecha: $\frac{1}{x} \to +\infty$ y $e^{t} \to +\infty$ cuando $t \to +\infty$, así que $\displaystyle \lim_{x \to 0^+} e^{1/x} = +\infty$.
3. Por la izquierda: $\frac{1}{x} \to -\infty$ y $e^{t} \to 0$ cuando $t \to -\infty$, así que $\displaystyle \lim_{x \to 0^-} e^{1/x} = 0$.
4. Uno de los límites laterales es infinito: la discontinuidad es **infinita** (esencial), aunque por la izquierda la función se acerque suavemente a $0$.

**Resultado final:** Discontinuidad infinita (esencial) en $x = 0$: límite izquierdo $0$, límite derecho $+\infty$.
