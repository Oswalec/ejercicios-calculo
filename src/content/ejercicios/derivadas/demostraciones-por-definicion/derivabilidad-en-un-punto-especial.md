---
titulo: "Derivabilidad de x² sen(1/x) en el origen"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "avanzado"
metodo: "Definición de derivada y teorema del encaje"
orden: 10
---

## Enunciado

Sea

$$
f(x) = \begin{cases} x^2\operatorname{sen}\left(\dfrac{1}{x}\right), & x \neq 0 \\ 0, & x = 0 \end{cases}
$$

Demuestra que $f$ es derivable en $x = 0$ y halla $f'(0)$.

## Solución

1. En $x = 0$ no se pueden usar las reglas de derivación (la fórmula no vale allí), así que usamos la definición: $f'(0) = \displaystyle \lim_{h \to 0} \frac{f(h) - f(0)}{h}$.
2. Para $h \neq 0$: $\frac{h^2\operatorname{sen}(1/h) - 0}{h} = h\operatorname{sen}\left(\frac{1}{h}\right)$.
3. Como $\left|\operatorname{sen}\left(\frac{1}{h}\right)\right| \le 1$: $-|h| \le h\operatorname{sen}\left(\frac{1}{h}\right) \le |h|$, y ambas cotas tienden a $0$.
4. Por el teorema del encaje, el límite es $0$: $f$ es derivable en $0$, con $f'(0) = 0$.

**Resultado final:** $f$ es derivable en $x = 0$ y $f'(0) = 0$.
