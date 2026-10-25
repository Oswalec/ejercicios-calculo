---
titulo: "Conservación del orden: lo que no se conserva"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "intermedio"
metodo: "Teorema de conservación del orden y contraejemplo"
orden: 4
---

## Enunciado

Sea $f$ tal que $f(x) > 0$ para todo $x \neq 2$ en un intervalo abierto que contiene a $2$, y supongamos que $\displaystyle \lim_{x \to 2} f(x) = L$ existe.

a) Demuestra que $L \ge 0$.

b) Muestra con un ejemplo que no se puede asegurar $L > 0$.

## Solución

1. Teorema de conservación del orden: si $g(x) \le f(x)$ cerca de $a$ (salvo quizá en $a$) y ambos límites existen, entonces $\displaystyle \lim_{x \to a} g(x) \le \lim_{x \to a} f(x)$.
2. a) Tomamos $g(x) = 0$. Como $f(x) > 0 \ge 0 = g(x)$ cerca de $2$, el teorema da $0 \le L$.
3. b) Consideramos $f(x) = (x - 2)^2$. Para $x \neq 2$ se cumple $f(x) > 0$, así que satisface la hipótesis.
4. Sin embargo, $\displaystyle \lim_{x \to 2} (x - 2)^2 = 0$, que no es mayor que $0$.
5. Conclusión: el paso al límite conserva las desigualdades no estrictas, pero una desigualdad estricta $f(x) > 0$ solo garantiza $L \ge 0$.

**Resultado final:** a) $L \ge 0$. b) $f(x) = (x - 2)^2$ es positiva para $x \neq 2$ y su límite en $2$ es $0$.
