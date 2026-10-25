---
titulo: "Raíz cúbica con diferencia de cubos"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "intermedio"
metodo: "Racionalización con la identidad de diferencia de cubos"
orden: 5
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 8} \frac{\sqrt[3]{x} - 2}{x - 8}
$$

## Solución

1. Al sustituir $x = 8$: numerador $2 - 2 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Con $a = \sqrt[3]{x}$ y $b = 2$ se cumple $a^3 - b^3 = x - 8$, y la identidad $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ da $x - 8 = \left(\sqrt[3]{x} - 2\right)\left(\sqrt[3]{x^2} + 2\sqrt[3]{x} + 4\right)$.
3. Para $x \neq 8$: $\frac{\sqrt[3]{x} - 2}{x - 8} = \frac{1}{\sqrt[3]{x^2} + 2\sqrt[3]{x} + 4}$.
4. La expresión es continua en $x = 8$: $\sqrt[3]{64} = 4$ y $\sqrt[3]{8} = 2$, así que el límite es $\frac{1}{4 + 4 + 4} = \frac{1}{12}$.

**Resultado final:** $\displaystyle \lim_{x \to 8} \frac{\sqrt[3]{x} - 2}{x - 8} = \frac{1}{12}$
