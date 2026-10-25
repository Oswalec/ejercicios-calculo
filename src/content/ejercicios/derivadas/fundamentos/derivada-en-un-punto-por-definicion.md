---
titulo: "Derivada en un punto por definición"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Definición de derivada por límite"
orden: 3
---

## Enunciado

Usa la definición para calcular $f'(1)$ si $f(x) = 3x^2 - 2x$.

## Solución

1. Definición: $f'(a) = \displaystyle \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$, si el límite existe.
2. $f(1) = 3 - 2 = 1$ y $f(1 + h) = 3(1 + 2h + h^2) - 2 - 2h = 1 + 4h + 3h^2$.
3. Cociente: $\frac{f(1 + h) - f(1)}{h} = \frac{4h + 3h^2}{h} = 4 + 3h$ para $h \neq 0$.
4. Límite: $f'(1) = \displaystyle \lim_{h \to 0} (4 + 3h) = 4$.

**Resultado final:** $f'(1) = 4$
