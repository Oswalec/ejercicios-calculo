---
titulo: "Punto de inflexión donde f'' no existe"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "avanzado"
metodo: "Cambio de signo de f'' alrededor de un punto"
orden: 6
---

## Enunciado

Demuestra que $f(x) = \sqrt[3]{x}$ tiene un punto de inflexión en el origen, aunque $f''(0)$ no existe.

## Solución

1. Un punto de inflexión es un punto de la gráfica, con $f$ continua allí, donde la concavidad cambia. No se exige que $f''$ exista en él.
2. $f'(x) = \frac{1}{3}x^{-2/3}$ y $f''(x) = -\frac{2}{9}x^{-5/3}$, para $x \neq 0$.
3. Signo: para $x < 0$, $x^{-5/3} < 0$, así que $f''(x) > 0$ (cóncava hacia arriba). Para $x > 0$, $f''(x) < 0$ (cóncava hacia abajo).
4. $f$ es continua en $0$ y la concavidad cambia allí: $(0, 0)$ es un punto de inflexión, con tangente vertical.

**Resultado final:** $(0, 0)$ es un punto de inflexión de $\sqrt[3]{x}$, aunque $f''(0)$ no existe.
