---
titulo: "Cambio de variable con exponencial"
tema: "integrales"
seccion: "sustitucion"
dificultad: "intermedio"
metodo: "Sustitución u = x²"
orden: 3
---

## Enunciado

Calcula la siguiente integral indefinida:

$$
\int x e^{x^2}\,dx
$$

## Solución

1. El exponente $x^2$ tiene derivada $2x$, y en la integral aparece $x$. Hacemos el cambio $u = x^2$.
2. Diferenciamos: $du = 2x\,dx$, es decir, $x\,dx = \frac{du}{2}$.
3. Sustituimos: $\int x e^{x^2}\,dx = \frac{1}{2} \int e^{u}\,du$.
4. Integramos, usando que $\int e^{u}\,du = e^{u} + C$: $\frac{1}{2} e^{u} + C$.
5. Regresamos a $x$: $\frac{e^{x^2}}{2} + C$.

**Resultado final:** $\displaystyle \int x e^{x^2}\,dx = \frac{e^{x^2}}{2} + C$
