---
titulo: "Derivada de √(2x + 3) por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "intermedio"
metodo: "Definición de derivada y racionalización"
orden: 9
---

## Enunciado

Usa la definición para hallar la derivada de $f(x) = \sqrt{2x + 3}$, con $x > -\dfrac{3}{2}$.

## Solución

1. $\frac{f(x + h) - f(x)}{h} = \frac{\sqrt{2x + 2h + 3} - \sqrt{2x + 3}}{h}$.
2. Racionalizamos: el numerador por su conjugado da $(2x + 2h + 3) - (2x + 3) = 2h$.
3. Para $h \neq 0$: $\frac{2h}{h\left(\sqrt{2x + 2h + 3} + \sqrt{2x + 3}\right)} = \frac{2}{\sqrt{2x + 2h + 3} + \sqrt{2x + 3}}$.
4. Cuando $h \to 0$: $\frac{2}{2\sqrt{2x + 3}} = \frac{1}{\sqrt{2x + 3}}$.

**Resultado final:** $f'(x) = \dfrac{1}{\sqrt{2x + 3}}$
