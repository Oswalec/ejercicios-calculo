---
titulo: "La parte fraccionaria es periódica de período 1"
tema: "funciones"
seccion: "otras-propiedades"
dificultad: "intermedio"
metodo: "Definición de función periódica y de período fundamental"
orden: 3
---

## Enunciado

Sea $f(x) = x - \lfloor x \rfloor$. Demuestra que $f$ es periódica y que su período fundamental es $1$.

## Solución

1. Para todo $x$, si $n = \lfloor x \rfloor$, entonces $n \le x < n + 1$, y sumando $1$, $n + 1 \le x + 1 < n + 2$. Por lo tanto $\lfloor x + 1 \rfloor = \lfloor x \rfloor + 1$.
2. Entonces $f(x + 1) = (x + 1) - \lfloor x + 1 \rfloor = x + 1 - \lfloor x \rfloor - 1 = f(x)$: $f$ es periódica con período $1$.
3. Para ver que es el período fundamental, supongamos que hubiera un período $T$ con $0 < T < 1$. Entonces $f(0 + T) = f(0) = 0$.
4. Pero $\lfloor T \rfloor = 0$, así que $f(T) = T - 0 = T \neq 0$. Es una contradicción, y no hay períodos menores que $1$.

**Resultado final:** $f$ es periódica y su período fundamental es $1$.
