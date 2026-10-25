---
titulo: "Derivada de un radical compuesto"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "basico"
metodo: "Regla de la cadena con la raíz cuadrada"
orden: 7
---

## Enunciado

Deriva $f(x) = \sqrt{x^2 + 5x}$.

## Solución

1. Escribimos $f(x) = (x^2 + 5x)^{1/2}$, con $u = x^2 + 5x$.
2. Regla de la cadena: $f'(x) = \frac{1}{2}u^{-1/2} \cdot u'$.
3. $u' = 2x + 5$.
4. Entonces $f'(x) = \frac{2x + 5}{2\sqrt{x^2 + 5x}}$, válida donde $x^2 + 5x > 0$.

**Resultado final:** $f'(x) = \dfrac{2x + 5}{2\sqrt{x^2 + 5x}}$
