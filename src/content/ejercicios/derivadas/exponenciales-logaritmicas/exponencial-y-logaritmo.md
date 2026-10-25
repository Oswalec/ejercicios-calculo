---
titulo: "Derivada de una exponencial por un logaritmo"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "intermedio"
metodo: "Regla del producto y regla de la cadena"
orden: 1
---

## Enunciado

Deriva la siguiente función, definida para $x > 0$:

$$
f(x) = e^{2x} \ln x
$$

## Solución

1. $f$ es el producto de $u(x) = e^{2x}$ y $v(x) = \ln x$. Usamos la regla del producto: $(uv)' = u'v + uv'$.
2. Derivamos $u$ con la regla de la cadena: $\frac{d}{dx} e^{2x} = e^{2x} \cdot 2 = 2e^{2x}$.
3. Derivamos $v$: $\frac{d}{dx} \ln x = \frac{1}{x}$, para $x > 0$.
4. Aplicamos la regla: $f'(x) = 2e^{2x} \ln x + e^{2x} \cdot \frac{1}{x}$.

**Resultado final:** $f'(x) = 2e^{2x} \ln x + \dfrac{e^{2x}}{x}$
