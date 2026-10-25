---
titulo: "Caja abierta de volumen máximo"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "intermedio"
metodo: "Optimización en un intervalo y primera derivada"
orden: 3
---

## Enunciado

De una lámina cuadrada de $20$ cm de lado se recortan cuadrados de lado $x$ en las esquinas para formar una caja sin tapa. ¿Qué valor de $x$ maximiza el volumen?

## Solución

1. Volumen: $V(x) = x(20 - 2x)^2$, con $0 < x < 10$.
2. Derivamos con la regla del producto: $V'(x) = (20 - 2x)^2 + x \cdot 2(20 - 2x)(-2) = (20 - 2x)(20 - 6x)$.
3. En $(0, 10)$, $V'(x) = 0$ solo si $20 - 6x = 0$, es decir, $x = \frac{10}{3}$. $V'$ es positiva antes y negativa después: máximo.
4. $V\left(\frac{10}{3}\right) = \frac{10}{3}\left(\frac{40}{3}\right)^2 = \frac{16000}{27} \approx 592.6$ cm³.

**Resultado final:** $x = \dfrac{10}{3} \approx 3.33$ cm, con volumen máximo $\dfrac{16000}{27} \approx 592.6$ cm³.
