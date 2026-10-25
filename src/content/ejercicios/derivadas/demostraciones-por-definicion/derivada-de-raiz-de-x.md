---
titulo: "Derivada de √x por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "intermedio"
metodo: "Definición de derivada y racionalización"
orden: 7
---

## Enunciado

Demuestra por definición que $\dfrac{d}{dx}\left(\sqrt{x}\right) = \dfrac{1}{2\sqrt{x}}$ para $x > 0$.

## Solución

1. $f'(x) = \displaystyle \lim_{h \to 0} \frac{\sqrt{x + h} - \sqrt{x}}{h}$, con $x > 0$ y $h$ pequeño, de modo que $x + h > 0$.
2. Racionalizamos: $\frac{\sqrt{x + h} - \sqrt{x}}{h} \cdot \frac{\sqrt{x + h} + \sqrt{x}}{\sqrt{x + h} + \sqrt{x}} = \frac{(x + h) - x}{h\left(\sqrt{x + h} + \sqrt{x}\right)}$.
3. Para $h \neq 0$: $\frac{1}{\sqrt{x + h} + \sqrt{x}}$.
4. Por la continuidad de la raíz, cuando $h \to 0$ el resultado es $\frac{1}{\sqrt{x} + \sqrt{x}} = \frac{1}{2\sqrt{x}}$.

**Resultado final:** $\dfrac{d}{dx}\left(\sqrt{x}\right) = \dfrac{1}{2\sqrt{x}}$, para $x > 0$.
