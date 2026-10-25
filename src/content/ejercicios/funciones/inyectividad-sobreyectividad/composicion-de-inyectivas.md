---
titulo: "La composición de funciones inyectivas es inyectiva"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "intermedio"
metodo: "Demostración directa con la definición"
orden: 8
---

## Enunciado

Demuestra que si $g\colon A \to B$ y $f\colon B \to C$ son inyectivas, entonces $f \circ g\colon A \to C$ es inyectiva.

## Solución

1. Sean $a_1, a_2 \in A$ con $(f \circ g)(a_1) = (f \circ g)(a_2)$, es decir, $f(g(a_1)) = f(g(a_2))$.
2. Como $f$ es inyectiva, de $f(g(a_1)) = f(g(a_2))$ se deduce $g(a_1) = g(a_2)$.
3. Como $g$ es inyectiva, de $g(a_1) = g(a_2)$ se deduce $a_1 = a_2$.
4. Probamos que imágenes iguales por $f \circ g$ implican elementos iguales: $f \circ g$ es inyectiva.

**Resultado final:** Si $f$ y $g$ son inyectivas, $f \circ g$ es inyectiva.
