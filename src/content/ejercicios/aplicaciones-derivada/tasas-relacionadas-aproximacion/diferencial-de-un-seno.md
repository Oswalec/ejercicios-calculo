---
titulo: "Estimación de sen 31° con diferenciales"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "intermedio"
metodo: "Diferenciales con el ángulo en radianes"
orden: 7
---

## Enunciado

Usa diferenciales para estimar $\operatorname{sen} 31^\circ$.

## Solución

1. Tomamos $f(x) = \operatorname{sen} x$ y $a = 30^\circ = \frac{\pi}{6}$. El incremento debe ir en radianes: $dx = 1^\circ = \frac{\pi}{180} \approx 0.017453$.
2. $f(a) = \frac{1}{2}$ y $f'(a) = \cos\frac{\pi}{6} = \frac{\sqrt{3}}{2} \approx 0.866025$.
3. $\operatorname{sen} 31^\circ \approx f(a) + f'(a)\,dx = 0.5 + 0.866025 \cdot 0.017453 \approx 0.5 + 0.015115 = 0.515115$.
4. El valor real es $0.515038\ldots$, con un error menor que $0.0001$. Las derivadas trigonométricas solo valen con el ángulo en radianes.

**Resultado final:** $\operatorname{sen} 31^\circ \approx 0.5151$
