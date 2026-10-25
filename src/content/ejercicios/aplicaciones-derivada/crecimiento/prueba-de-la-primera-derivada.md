---
titulo: "Prueba de la primera derivada con un punto crítico que no es extremo"
tema: "aplicaciones-derivada"
seccion: "crecimiento"
dificultad: "intermedio"
metodo: "Prueba de la primera derivada"
orden: 3
---

## Enunciado

Halla y clasifica los extremos locales de $f(x) = x^4 - 4x^3$.

## Solución

1. $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Números críticos: $x = 0$ y $x = 3$.
2. Signo de $f'$: el factor $4x^2 \ge 0$, así que el signo lo da $x - 3$. Es negativo en $(-\infty, 0)$ y en $(0, 3)$, y positivo en $(3, \infty)$.
3. En $x = 3$, $f'$ pasa de negativa a positiva: **mínimo local**, con $f(3) = 81 - 108 = -27$.
4. En $x = 0$, $f'$ no cambia de signo (negativa a ambos lados): **no hay extremo**, aunque $f'(0) = 0$.

**Resultado final:** Mínimo local $f(3) = -27$; en $x = 0$ no hay extremo.
