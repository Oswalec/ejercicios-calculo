---
titulo: "La exponencial: inyectiva pero no sobreyectiva en ℝ"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "intermedio"
metodo: "Monotonía y comparación del rango con el codominio"
orden: 4
---

## Enunciado

Clasifica $f(x) = e^{x}$ como función de $\mathbb{R}$ en $\mathbb{R}$, y luego como función de $\mathbb{R}$ en $(0, \infty)$.

## Solución

1. Inyectividad: si $e^{a} = e^{b}$, aplicando $\ln$ se obtiene $a = b$. Es inyectiva con cualquier codominio.
2. Como $f\colon \mathbb{R} \to \mathbb{R}$: el rango es $(0, \infty)$ y, por ejemplo, $-1$ no se alcanza. No es sobreyectiva, así que tampoco es biyectiva.
3. Como $f\colon \mathbb{R} \to (0, \infty)$: dado $y > 0$, el valor $x = \ln y$ cumple $e^{x} = y$. Es sobreyectiva.
4. En el segundo caso es inyectiva y sobreyectiva: biyectiva, y su inversa es $\ln\colon (0, \infty) \to \mathbb{R}$.

**Resultado final:** De $\mathbb{R}$ en $\mathbb{R}$: inyectiva, no sobreyectiva. De $\mathbb{R}$ en $(0, \infty)$: biyectiva.
