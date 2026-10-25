---
titulo: "Lata cilíndrica con la menor cantidad de material"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "intermedio"
metodo: "Eliminación de una variable con la restricción y primera derivada"
orden: 4
---

## Enunciado

Se quiere fabricar una lata cilíndrica cerrada de $1000$ cm³ (un litro) con la menor superficie posible. Halla el radio y la altura.

## Solución

1. Restricción: $\pi r^2 h = 1000$, de donde $h = \frac{1000}{\pi r^2}$.
2. Superficie (dos tapas y el lateral): $S = 2\pi r^2 + 2\pi rh = 2\pi r^2 + \frac{2000}{r}$, con $r > 0$.
3. $S'(r) = 4\pi r - \frac{2000}{r^2} = 0$, de donde $r^3 = \frac{500}{\pi}$ y $r = \sqrt[3]{\frac{500}{\pi}} \approx 5.42$ cm. Como $S''(r) = 4\pi + \frac{4000}{r^3} > 0$, es un mínimo.
4. Altura: $h = \frac{1000}{\pi r^2}$. Como $\pi r^3 = 500$, se tiene $h = \frac{1000}{\pi r^3} \cdot r = 2r \approx 10.84$ cm. La altura óptima es igual al diámetro.

**Resultado final:** $r = \sqrt[3]{\dfrac{500}{\pi}} \approx 5.42$ cm y $h = 2r \approx 10.84$ cm.
