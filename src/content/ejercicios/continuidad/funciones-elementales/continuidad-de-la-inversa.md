---
titulo: "Continuidad de una función inversa"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "intermedio"
metodo: "Teorema de continuidad de la inversa"
orden: 9
---

## Enunciado

Sea $f(x) = x^3 + 1$. Justifica que su inversa es continua en $\mathbb{R}$ y calcula $\displaystyle \lim_{x \to 9} f^{-1}(x)$.

## Solución

1. Teorema: si $f$ es continua y estrictamente monótona en un intervalo, su inversa es continua en el intervalo imagen.
2. $f$ es un polinomio, continuo en $\mathbb{R}$, y es estrictamente creciente: si $a < b$, entonces $a^3 < b^3$, así que $f(a) < f(b)$. Su imagen es $\mathbb{R}$.
3. Entonces $f^{-1}(x) = \sqrt[3]{x - 1}$ es continua en $\mathbb{R}$.
4. Por continuidad: $\displaystyle \lim_{x \to 9} f^{-1}(x) = \sqrt[3]{9 - 1} = \sqrt[3]{8} = 2$. Comprobación: $f(2) = 9$.

**Resultado final:** $f^{-1}(x) = \sqrt[3]{x - 1}$ es continua en $\mathbb{R}$ y $\displaystyle \lim_{x \to 9} f^{-1}(x) = 2$.
