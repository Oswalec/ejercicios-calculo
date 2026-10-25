---
titulo: "Continuidad de una función raíz cuadrada"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "basico"
metodo: "Continuidad de la raíz y continuidad lateral en el extremo"
orden: 3
---

## Enunciado

Determina el intervalo donde es continua $f(x) = \sqrt{x - 3}$.

## Solución

1. Dominio: $x - 3 \ge 0$, es decir, $x \ge 3$.
2. Para $a > 3$: $x - 3$ es continua y positiva cerca de $a$, y la raíz cuadrada es continua en los positivos. Por la continuidad de la composición, $f$ es continua en $a$.
3. En $a = 3$ solo se puede estudiar la continuidad por la derecha: $\displaystyle \lim_{x \to 3^+} \sqrt{x - 3} = 0 = f(3)$.
4. Por lo tanto, $f$ es continua en todo su dominio.

**Resultado final:** $f$ es continua en $[3, \infty)$ (por la derecha en $x = 3$).
