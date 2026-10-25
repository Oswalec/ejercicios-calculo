---
titulo: "Una recta tangente vertical"
tema: "derivadas"
seccion: "aplicaciones-geometricas"
dificultad: "intermedio"
metodo: "Derivada infinita y función continua"
orden: 6
---

## Enunciado

Demuestra que la gráfica de $f(x) = \sqrt[3]{x - 2}$ tiene una recta tangente vertical en $x = 2$ y escribe su ecuación.

## Solución

1. $f$ es continua en $2$, con $f(2) = 0$. La tangente es vertical si $\frac{f(2 + h) - f(2)}{h}$ tiende a $+\infty$ o a $-\infty$.
2. $\frac{f(2 + h) - f(2)}{h} = \frac{\sqrt[3]{h}}{h} = \frac{1}{\sqrt[3]{h^2}}$ para $h \neq 0$.
3. Como $\sqrt[3]{h^2} > 0$ y tiende a $0$, el cociente tiende a $+\infty$ por ambos lados.
4. La gráfica pasa por $(2, 0)$ con pendiente infinita: la tangente es la recta vertical $x = 2$.

**Resultado final:** Tangente vertical $x = 2$, en el punto $(2, 0)$.
