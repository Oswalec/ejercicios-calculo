---
titulo: "La integral de un producto no es el producto de integrales"
tema: "integrales"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Contraejemplo verificado por derivación"
orden: 10
---

## Enunciado

Muestra con $f(x) = g(x) = x$ que, en general, $\displaystyle \int f(x)g(x)\,dx \neq \int f(x)\,dx \cdot \int g(x)\,dx$.

## Solución

1. Lado izquierdo: $\int x \cdot x\,dx = \int x^2\,dx = \frac{x^3}{3} + C$.
2. Producto de integrales: $\int x\,dx \cdot \int x\,dx = \frac{x^2}{2} \cdot \frac{x^2}{2} = \frac{x^4}{4}$ (sin constantes).
3. Verificación por derivación: $\left(\frac{x^4}{4}\right)' = x^3 \neq x^2$, así que $\frac{x^4}{4}$ no es primitiva de $x^2$.
4. Por eso hacen falta técnicas como la sustitución y la integración por partes; la linealidad solo vale para sumas y constantes.

**Resultado final:** $\displaystyle \int x^2\,dx = \frac{x^3}{3} + C \neq \frac{x^4}{4}$: la propiedad es falsa en general.
