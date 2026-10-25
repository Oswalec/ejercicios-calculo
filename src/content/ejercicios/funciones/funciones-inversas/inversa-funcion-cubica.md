---
titulo: "Inversa de una función cúbica"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "basico"
metodo: "Inyectividad algebraica y raíz cúbica"
orden: 9
---

## Enunciado

Demuestra que $f(x) = x^3 + 1$ es inyectiva y halla su inversa.

## Solución

1. Inyectividad: si $f(a) = f(b)$, entonces $a^3 + 1 = b^3 + 1$, es decir, $a^3 = b^3$. Como la raíz cúbica es única en $\mathbb{R}$, $a = b$.
2. Despejamos: $y = x^3 + 1$, es decir, $x^3 = y - 1$, de donde $x = \sqrt[3]{y - 1}$. Esto vale para todo $y \in \mathbb{R}$, porque la raíz cúbica está definida en todos los reales.
3. Intercambiamos variables: $f^{-1}(x) = \sqrt[3]{x - 1}$, con dominio $\mathbb{R}$.
4. Verificación: $f\left(\sqrt[3]{x - 1}\right) = (x - 1) + 1 = x$.

**Resultado final:** $f^{-1}(x) = \sqrt[3]{x - 1}$
