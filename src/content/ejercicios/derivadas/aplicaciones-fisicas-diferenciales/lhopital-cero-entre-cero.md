---
titulo: "Regla de L'Hôpital aplicada dos veces"
tema: "derivadas"
seccion: "aplicaciones-fisicas-diferenciales"
dificultad: "intermedio"
metodo: "Regla de L'Hôpital"
orden: 8
---

## Enunciado

Calcula

$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2}
$$

## Solución

1. Regla de L'Hôpital: si $f$ y $g$ son derivables cerca de $a$, el límite es de la forma $\frac{0}{0}$ (o $\frac{\infty}{\infty}$), $g'(x) \neq 0$ cerca de $a$ y existe $\displaystyle \lim \frac{f'}{g'}$, entonces $\displaystyle \lim \frac{f}{g} = \lim \frac{f'}{g'}$.
2. En $x = 0$: numerador $1 - 1 - 0 = 0$ y denominador $0$. Aplicamos la regla: $\displaystyle \lim_{x \to 0} \frac{e^{x} - 1}{2x}$.
3. Sigue siendo $\frac{0}{0}$; aplicamos de nuevo: $\displaystyle \lim_{x \to 0} \frac{e^{x}}{2} = \frac{1}{2}$.
4. Como este último límite existe, también existen los anteriores y valen $\frac{1}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2} = \frac{1}{2}$
