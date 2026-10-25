---
titulo: "Rectángulo de área máxima con perímetro fijo"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "basico"
metodo: "Función objetivo de una variable y primera derivada"
orden: 1
---

## Enunciado

De todos los rectángulos de perímetro $40$ m, ¿cuál tiene área máxima?

## Solución

1. Sean $x$ e $y$ los lados. Restricción: $2x + 2y = 40$, de donde $y = 20 - x$, con $0 < x < 20$.
2. Función objetivo: $A(x) = x(20 - x) = 20x - x^2$.
3. $A'(x) = 20 - 2x = 0$ en $x = 10$. Además $A''(x) = -2 < 0$: es un máximo.
4. Con $x = 10$ se obtiene $y = 10$: el rectángulo óptimo es un cuadrado, de área $100$ m².

**Resultado final:** El cuadrado de $10 \times 10$ m, con área máxima de $100$ m².
