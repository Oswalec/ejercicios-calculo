---
titulo: "Aplicación: un impuesto por tramos continuo"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "basico"
metodo: "Continuidad en el cambio de tramo"
orden: 10
---

## Enunciado

Un impuesto sobre ingresos $x$ (soles) se calcula como

$$
I(x) = \begin{cases} 0.08x, & 0 \le x \le 5000 \\ 400 + 0.14(x - 5000), & x > 5000 \end{cases}
$$

Verifica que es continuo en $x = 5000$ y calcula el impuesto para un ingreso de S/ 8000.

## Solución

1. $I(5000) = 0.08 \cdot 5000 = 400$, que coincide con el límite por la izquierda.
2. Por la derecha: $\displaystyle \lim_{x \to 5000^+} \left[400 + 0.14(x - 5000)\right] = 400$. Es continuo: ganar un sol más no dispara el impuesto, solo se aplica la tasa mayor al excedente.
3. Para $x = 8000 > 5000$: $I(8000) = 400 + 0.14 \cdot 3000 = 400 + 420 = 820$.

**Resultado final:** $I$ es continua en $x = 5000$; el impuesto sobre S/ 8000 es S/ 820.
