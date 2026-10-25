---
titulo: "Teorema de conservación del orden"
tema: "limites"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Teorema de conservación del orden"
orden: 9
---

## Enunciado

Sea $f$ una función tal que $f(x) \le x^2 + 1$ para todo $x$ en un intervalo abierto que contiene a $1$ (salvo quizá en $x = 1$). Si $\displaystyle \lim_{x \to 1} f(x) = L$ existe, demuestra que $L \le 2$.

## Solución

1. Teorema de conservación del orden: si $f(x) \le g(x)$ para todo $x \neq a$ en un intervalo abierto que contiene a $a$, y existen $\displaystyle \lim_{x \to a} f(x) = L$ y $\displaystyle \lim_{x \to a} g(x) = M$, entonces $L \le M$.
2. Tomamos $g(x) = x^2 + 1$ y $a = 1$. La hipótesis $f(x) \le g(x)$ se cumple cerca de $1$.
3. Calculamos el límite de $g$: es un polinomio, así que $\displaystyle \lim_{x \to 1} (x^2 + 1) = 1 + 1 = 2$.
4. Por hipótesis, $\displaystyle \lim_{x \to 1} f(x) = L$ existe. Aplicando el teorema: $L \le 2$.
5. Observación: el teorema conserva desigualdades no estrictas. Aunque se tuviera $f(x) < g(x)$, solo podría concluirse $L \le 2$, no $L < 2$.

**Resultado final:** $L \le 2$.
