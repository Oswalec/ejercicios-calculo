---
titulo: "Demostración algebraica de inyectividad de una racional"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "intermedio"
metodo: "Definición f(a) = f(b) ⇒ a = b"
orden: 6
---

## Enunciado

Sea $f\colon \mathbb{R} \setminus \{2\} \to \mathbb{R} \setminus \{1\}$, $f(x) = \dfrac{x + 1}{x - 2}$. Demuestra que es biyectiva.

## Solución

1. Inyectiva: supongamos $\frac{a + 1}{a - 2} = \frac{b + 1}{b - 2}$, con $a, b \neq 2$. Multiplicando en cruz: $(a + 1)(b - 2) = (b + 1)(a - 2)$.
2. Desarrollamos: $ab - 2a + b - 2 = ab - 2b + a - 2$. Simplificando queda $-3a = -3b$, es decir, $a = b$.
3. Sobreyectiva: dado $y \neq 1$, resolvemos $y = \frac{x + 1}{x - 2}$: $yx - 2y = x + 1$, de donde $x(y - 1) = 2y + 1$ y $x = \frac{2y + 1}{y - 1}$.
4. Ese $x$ existe porque $y \neq 1$, y además $x \neq 2$: si fuera $\frac{2y + 1}{y - 1} = 2$, se tendría $2y + 1 = 2y - 2$, lo cual es imposible.
5. Es inyectiva y sobreyectiva, así que es biyectiva.

**Resultado final:** $f$ es biyectiva, con inversa $f^{-1}(x) = \dfrac{2x + 1}{x - 1}$.
