---
titulo: "Dominio con varias restricciones simultáneas"
tema: "funciones"
seccion: "dominio"
dificultad: "avanzado"
metodo: "Intersección de las condiciones de cada término"
orden: 10
---

## Enunciado

Halla el dominio de

$$
f(x) = \frac{\sqrt{x + 3}}{\ln(5 - x)} + e^{1/x}
$$

## Solución

1. Raíz cuadrada: $x + 3 \ge 0$, es decir, $x \ge -3$.
2. Logaritmo: su argumento debe ser positivo, $5 - x > 0$, es decir, $x < 5$.
3. Denominador: $\ln(5 - x) \neq 0$. Como $\ln u = 0$ solo si $u = 1$, se exige $5 - x \neq 1$, es decir, $x \neq 4$.
4. Exponencial: $e^{u}$ está definida para todo $u$, pero el exponente $\frac{1}{x}$ exige $x \neq 0$.
5. Intersecamos: $[-3, 5)$ sin los puntos $0$ y $4$.

**Resultado final:** $\operatorname{Dom} f = [-3, 0) \cup (0, 4) \cup (4, 5)$
