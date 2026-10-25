---
titulo: "Aproximación lineal de √4.1"
tema: "derivadas"
seccion: "aplicaciones-fisicas-diferenciales"
dificultad: "basico"
metodo: "Linealización L(x) = f(a) + f'(a)(x − a)"
orden: 6
---

## Enunciado

Usa la aproximación lineal de $f(x) = \sqrt{x}$ en $a = 4$ para estimar $\sqrt{4.1}$.

## Solución

1. La linealización de $f$ en $a$ es $L(x) = f(a) + f'(a)(x - a)$: la recta tangente usada como aproximación.
2. $f(4) = 2$ y $f'(x) = \frac{1}{2\sqrt{x}}$, así que $f'(4) = \frac{1}{4}$.
3. $L(x) = 2 + \frac{1}{4}(x - 4)$.
4. $\sqrt{4.1} \approx L(4.1) = 2 + \frac{0.1}{4} = 2.025$. El valor real es $\approx 2.02485$, con un error menor que $0.0002$.

**Resultado final:** $\sqrt{4.1} \approx 2.025$
