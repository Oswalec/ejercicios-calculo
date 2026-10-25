---
titulo: "Rango de una función radical"
tema: "funciones"
seccion: "rango"
dificultad: "intermedio"
metodo: "Acotación del radicando en el dominio"
orden: 5
---

## Enunciado

Halla el rango de

$$
f(x) = \sqrt{16 - x^2}
$$

## Solución

1. Dominio: $16 - x^2 \ge 0$, es decir, $-4 \le x \le 4$.
2. En ese dominio, $0 \le x^2 \le 16$, y por lo tanto $0 \le 16 - x^2 \le 16$.
3. La raíz cuadrada es creciente, así que $0 \le \sqrt{16 - x^2} \le 4$.
4. Todo $y \in [0, 4]$ se alcanza: $x = \sqrt{16 - y^2}$ está en $[0, 4]$ y cumple $f(x) = \sqrt{16 - (16 - y^2)} = \sqrt{y^2} = y$, pues $y \ge 0$.

**Resultado final:** $\operatorname{Ran} f = [0, 4]$
