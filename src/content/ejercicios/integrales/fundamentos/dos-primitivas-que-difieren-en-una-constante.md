---
titulo: "Dos primitivas que parecen distintas"
tema: "integrales"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Primitivas de una misma función difieren en una constante"
orden: 5
---

## Enunciado

Muestra que $F(x) = \operatorname{sen}^2 x$ y $G(x) = -\cos^2 x$ son ambas primitivas de $f(x) = 2\operatorname{sen} x\cos x$, y explica por qué no hay contradicción.

## Solución

1. $F'(x) = 2\operatorname{sen} x\cos x$, por la regla de la cadena.
2. $G'(x) = -2\cos x \cdot (-\operatorname{sen} x) = 2\operatorname{sen} x\cos x$.
3. Ambas son primitivas de $f$. Dos primitivas de la misma función en un intervalo difieren en una constante.
4. Comprobación: $F(x) - G(x) = \operatorname{sen}^2 x + \cos^2 x = 1$. Por eso no hay contradicción: la constante $C$ de la integral indefinida absorbe esa diferencia.

**Resultado final:** $F' = G' = f$ y $F - G = 1$: ambas son primitivas válidas.
