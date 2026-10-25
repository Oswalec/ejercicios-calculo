---
titulo: "Raíz cúbica de 1 + x cerca de cero"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "intermedio"
metodo: "Racionalización con la identidad de diferencia de cubos"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\sqrt[3]{1 + x} - 1}{x}
$$

## Solución

1. Al sustituir $x = 0$: numerador $1 - 1 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Sea $a = \sqrt[3]{1 + x}$. Entonces $a^3 - 1 = x$, y por la diferencia de cubos $a^3 - 1 = (a - 1)(a^2 + a + 1)$.
3. Por lo tanto $x = \left(\sqrt[3]{1 + x} - 1\right)\left(\sqrt[3]{(1 + x)^2} + \sqrt[3]{1 + x} + 1\right)$, y para $x \neq 0$: $\frac{\sqrt[3]{1 + x} - 1}{x} = \frac{1}{\sqrt[3]{(1 + x)^2} + \sqrt[3]{1 + x} + 1}$.
4. La expresión es continua en $x = 0$: $\frac{1}{1 + 1 + 1} = \frac{1}{3}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\sqrt[3]{1 + x} - 1}{x} = \frac{1}{3}$
