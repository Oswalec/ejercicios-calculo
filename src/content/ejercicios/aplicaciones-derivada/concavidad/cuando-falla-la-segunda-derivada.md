---
titulo: "Cuando la prueba de la segunda derivada no decide"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "intermedio"
metodo: "Prueba de la primera derivada como alternativa"
orden: 5
---

## Enunciado

Sea $f(x) = x^4$. Muestra que la prueba de la segunda derivada no decide en $x = 0$ y clasifica ese punto crítico por otro método.

## Solución

1. $f'(x) = 4x^3$, que se anula en $x = 0$. Además $f''(x) = 12x^2$, así que $f''(0) = 0$.
2. Si $f''(c) = 0$, la prueba de la segunda derivada no concluye: el punto puede ser máximo, mínimo o ninguno.
3. Usamos la primera derivada: $f'(x) = 4x^3$ es negativa para $x < 0$ y positiva para $x > 0$.
4. $f'$ pasa de negativa a positiva: hay un **mínimo local** (de hecho absoluto) en $x = 0$, con $f(0) = 0$. En cambio, $g(x) = x^3$ también cumple $g'(0) = g''(0) = 0$ y no tiene extremo allí.

**Resultado final:** $f''(0) = 0$ no permite decidir; por la primera derivada, $x = 0$ es un mínimo de $x^4$.
