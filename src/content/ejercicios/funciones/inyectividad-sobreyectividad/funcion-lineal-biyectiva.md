---
titulo: "Una función lineal biyectiva"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "basico"
metodo: "Definiciones de inyectividad y sobreyectividad"
orden: 1
---

## Enunciado

Demuestra que $f\colon \mathbb{R} \to \mathbb{R}$, $f(x) = 5x - 2$, es biyectiva.

## Solución

1. Inyectiva: supongamos $f(a) = f(b)$. Entonces $5a - 2 = 5b - 2$, de donde $5a = 5b$ y $a = b$.
2. Sobreyectiva: dado cualquier $y \in \mathbb{R}$ (el codominio), buscamos $x$ con $f(x) = y$: $5x - 2 = y$, de donde $x = \frac{y + 2}{5} \in \mathbb{R}$.
3. Comprobación: $f\left(\frac{y + 2}{5}\right) = (y + 2) - 2 = y$.
4. Al ser inyectiva y sobreyectiva, es biyectiva.

**Resultado final:** $f$ es biyectiva.
