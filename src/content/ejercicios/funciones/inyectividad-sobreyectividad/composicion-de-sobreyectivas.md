---
titulo: "La composición de funciones sobreyectivas es sobreyectiva"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "avanzado"
metodo: "Demostración directa con la definición"
orden: 9
---

## Enunciado

Demuestra que si $g\colon A \to B$ y $f\colon B \to C$ son sobreyectivas, entonces $f \circ g\colon A \to C$ es sobreyectiva.

## Solución

1. Hay que probar que todo $c \in C$ tiene una preimagen en $A$ por $f \circ g$.
2. Sea $c \in C$. Como $f$ es sobreyectiva, existe $b \in B$ con $f(b) = c$.
3. Como $g$ es sobreyectiva, para ese $b$ existe $a \in A$ con $g(a) = b$.
4. Entonces $(f \circ g)(a) = f(g(a)) = f(b) = c$: el elemento $a$ es preimagen de $c$.
5. Como $c$ era arbitrario, $f \circ g$ es sobreyectiva. Junto con el resultado análogo para inyectivas, se deduce que la composición de biyecciones es biyectiva.

**Resultado final:** Si $f$ y $g$ son sobreyectivas, $f \circ g$ es sobreyectiva.
