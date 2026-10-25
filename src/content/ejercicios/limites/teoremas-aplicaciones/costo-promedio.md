---
titulo: "Aplicación: costo promedio de producción"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "basico"
metodo: "Límite al infinito de una función racional"
orden: 9
---

## Enunciado

Producir $x$ unidades de un artículo cuesta $C(x) = 5000 + 12x$ soles (costo fijo más costo por unidad). El costo promedio por unidad es

$$
\overline{C}(x) = \frac{5000 + 12x}{x}, \qquad x > 0.
$$

¿A qué valor se acerca el costo promedio cuando la producción es muy grande? Interpreta el resultado.

## Solución

1. Hay que calcular $\displaystyle \lim_{x \to \infty} \overline{C}(x)$.
2. Separamos la fracción: $\overline{C}(x) = \frac{5000}{x} + 12$.
3. Cuando $x \to \infty$, $\frac{5000}{x} \to 0$, así que $\overline{C}(x) \to 12$.
4. Interpretación: el costo fijo de $5000$ soles se reparte entre cada vez más unidades y su efecto por unidad desaparece. El costo promedio se acerca al costo variable de $12$ soles por unidad, sin bajar de él.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \overline{C}(x) = 12$ soles por unidad.
