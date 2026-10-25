---
titulo: "Hallar δ para un ε dado"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "intermedio"
metodo: "Definición ε-δ con racionalización"
orden: 10
---

## Enunciado

Se sabe que $\displaystyle \lim_{x \to 4} \sqrt{x} = 2$. Halla un $\delta > 0$ tal que

$$
0 < |x - 4| < \delta \implies \left|\sqrt{x} - 2\right| < 0.1
$$

## Solución

1. Relacionamos $|\sqrt{x} - 2|$ con $|x - 4|$ racionalizando: para $x \ge 0$, $\sqrt{x} - 2 = \frac{x - 4}{\sqrt{x} + 2}$.
2. Como $\sqrt{x} \ge 0$, se cumple $\sqrt{x} + 2 \ge 2$, y por lo tanto $\left|\sqrt{x} - 2\right| = \frac{|x - 4|}{\sqrt{x} + 2} \le \frac{|x - 4|}{2}$.
3. Basta pedir $\frac{|x - 4|}{2} < 0.1$, es decir, $|x - 4| < 0.2$. Tomamos $\delta = 0.2$.
4. Verificación del dominio: si $|x - 4| < 0.2$, entonces $3.8 < x < 4.2$, así que $x > 0$ y $\sqrt{x}$ está definida.
5. Así, si $0 < |x - 4| < 0.2$: $\left|\sqrt{x} - 2\right| \le \frac{|x - 4|}{2} < \frac{0.2}{2} = 0.1$. Cualquier $\delta$ positivo menor que $0.2$ también sirve.

**Resultado final:** $\delta = 0.2$ (o cualquier valor $0 < \delta \le 0.2$).
