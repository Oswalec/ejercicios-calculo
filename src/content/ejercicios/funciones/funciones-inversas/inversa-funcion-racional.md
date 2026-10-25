---
titulo: "Inversa de una función racional"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "intermedio"
metodo: "Despeje algebraico e intercambio de dominio y rango"
orden: 3
---

## Enunciado

Halla la inversa de $f(x) = \dfrac{2x + 1}{x - 3}$ e indica su dominio y su rango.

## Solución

1. Escribimos $y = \frac{2x + 1}{x - 3}$ con $x \neq 3$. Multiplicamos: $y(x - 3) = 2x + 1$, es decir, $yx - 2x = 3y + 1$.
2. Factorizamos $x$: $x(y - 2) = 3y + 1$. Para $y \neq 2$: $x = \frac{3y + 1}{y - 2}$.
3. Como a cada $y \neq 2$ le corresponde un único $x$, $f$ es inyectiva y su rango es $\mathbb{R} \setminus \{2\}$.
4. Intercambiamos variables: $f^{-1}(x) = \frac{3x + 1}{x - 2}$.
5. El dominio de la inversa es el rango de $f$, $\mathbb{R} \setminus \{2\}$, y su rango es el dominio de $f$, $\mathbb{R} \setminus \{3\}$.

**Resultado final:** $f^{-1}(x) = \dfrac{3x + 1}{x - 2}$, con dominio $\mathbb{R} \setminus \{2\}$ y rango $\mathbb{R} \setminus \{3\}$.
