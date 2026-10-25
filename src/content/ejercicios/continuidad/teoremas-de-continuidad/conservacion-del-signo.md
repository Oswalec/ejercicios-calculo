---
titulo: "Teorema de conservación del signo"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Teorema de conservación del signo y cálculo de un δ explícito"
orden: 7
---

## Enunciado

Sea $f(x) = x^2 - 2$. Como $f(1.5) > 0$, el teorema de conservación del signo asegura que $f$ es positiva en un intervalo alrededor de $1.5$. Halla un intervalo concreto de la forma $(1.5 - \delta,\ 1.5 + \delta)$.

## Solución

1. Teorema de conservación del signo: si $f$ es continua en $a$ y $f(a) > 0$, existe $\delta > 0$ tal que $f(x) > 0$ para todo $x \in (a - \delta, a + \delta)$.
2. $f(1.5) = 2.25 - 2 = 0.25 > 0$, y $f$ es continua, así que el teorema se aplica.
3. Para hallar un $\delta$ concreto: $f(x) > 0$ si y solo si $x^2 > 2$, y para $x > 0$ eso equivale a $x > \sqrt{2} \approx 1.4142$.
4. Con $\delta = 0.08$: el intervalo es $(1.42,\ 1.58)$ y todos sus puntos cumplen $x > 1.42 > \sqrt{2}$. Por lo tanto $f(x) > 0$ en todo él.

**Resultado final:** Por ejemplo, $f(x) > 0$ en $(1.42,\ 1.58)$ (con $\delta = 0.08$).
