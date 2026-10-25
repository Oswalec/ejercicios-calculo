---
titulo: "Discontinuidad infinita"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "basico"
metodo: "Límites laterales infinitos"
orden: 3
grafica:
  ubicacion: "solucion"
  x: [-1, 5]
  y: [-1, 10]
  curvas:
    - expr: "1/(x - 2)^2"
      etiqueta: 'f(x) = \dfrac{1}{(x - 2)^2}'
  descripcion: "Las dos ramas suben sin cota al acercarse a x = 2 por ambos lados: hay una asíntota vertical en x = 2."
---

## Enunciado

Clasifica la discontinuidad de $f(x) = \dfrac{1}{(x - 2)^2}$ en $x = 2$.

## Solución

1. $f(2)$ no está definido: el denominador se anula.
2. Para $x \neq 2$, $(x - 2)^2 > 0$ y tiende a $0$, mientras el numerador vale $1$. Entonces $\displaystyle \lim_{x \to 2^-} f(x) = \lim_{x \to 2^+} f(x) = +\infty$.
3. Al menos un límite lateral es infinito: la discontinuidad es **infinita** (esencial), y la recta $x = 2$ es una asíntota vertical.
4. No es removible: no existe un número $L$ al que se acerque $f(x)$.

**Resultado final:** Discontinuidad infinita en $x = 2$ (asíntota vertical).
