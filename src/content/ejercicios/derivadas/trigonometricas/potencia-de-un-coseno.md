---
titulo: "Potencia de un coseno con ángulo múltiple"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Regla de la cadena en tres capas"
orden: 5
---

## Enunciado

Deriva $f(x) = \cos^3(2x)$.

## Solución

1. $f(x) = [\cos(2x)]^3$. Hay tres capas: el cubo, el coseno y $2x$.
2. Derivada del cubo: $3[\cos(2x)]^2$.
3. Por la cadena, se multiplica por la derivada del coseno, $-\operatorname{sen}(2x)$, y por la derivada de $2x$, que es $2$.
4. $f'(x) = 3\cos^2(2x) \cdot \left(-\operatorname{sen}(2x)\right) \cdot 2 = -6\cos^2(2x)\operatorname{sen}(2x)$.

**Resultado final:** $f'(x) = -6\cos^2(2x)\operatorname{sen}(2x)$
