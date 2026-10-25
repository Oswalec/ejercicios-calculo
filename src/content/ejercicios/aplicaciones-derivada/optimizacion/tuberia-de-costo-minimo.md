---
titulo: "Tubería de costo mínimo cruzando un río"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "avanzado"
metodo: "Optimización con restricciones geométricas"
orden: 10
---

## Enunciado

Una planta está en la orilla de un río recto de $1$ km de ancho. Hay que llevar una tubería hasta un pueblo en la orilla opuesta, $4$ km río abajo. El tendido bajo el agua cuesta $5$ mil soles/km y en tierra $3$ mil soles/km. ¿Cómo se minimiza el costo?

## Solución

1. La tubería cruza el río en diagonal hasta un punto a $x$ km río abajo (en la otra orilla) y sigue por tierra los $4 - x$ km restantes, con $0 \le x \le 4$.
2. Costo (miles de soles): $C(x) = 5\sqrt{1 + x^2} + 3(4 - x)$.
3. $C'(x) = \frac{5x}{\sqrt{1 + x^2}} - 3 = 0$, es decir, $5x = 3\sqrt{1 + x^2}$. Elevando al cuadrado: $25x^2 = 9 + 9x^2$, de donde $x = \frac{3}{4}$ (positivo).
4. $C\left(\frac{3}{4}\right) = 5 \cdot \frac{5}{4} + 3 \cdot \frac{13}{4} = \frac{25 + 39}{4} = 16$. En los extremos: $C(0) = 17$ y $C(4) = 5\sqrt{17} \approx 20.6$. El mínimo es $16$.

**Resultado final:** Cruzar en diagonal hasta $0.75$ km río abajo y seguir por tierra; costo mínimo de S/ 16 000.
