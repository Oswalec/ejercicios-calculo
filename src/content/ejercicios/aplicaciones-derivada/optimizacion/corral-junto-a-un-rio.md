---
titulo: "Corral rectangular junto a un río"
tema: "aplicaciones-derivada"
seccion: "optimizacion"
dificultad: "basico"
metodo: "Función objetivo de una variable y primera derivada"
orden: 2
---

## Enunciado

Un agricultor tiene $120$ m de cerca para un corral rectangular junto a un río, que no necesita cerca en ese lado. ¿Qué dimensiones maximizan el área?

## Solución

1. Sea $x$ el largo de cada lado perpendicular al río e $y$ el lado paralelo. Restricción: $2x + y = 120$, de donde $y = 120 - 2x$, con $0 < x < 60$.
2. Área: $A(x) = x(120 - 2x) = 120x - 2x^2$.
3. $A'(x) = 120 - 4x = 0$ en $x = 30$, y $A''(x) = -4 < 0$: máximo.
4. Entonces $y = 120 - 60 = 60$, y el área es $30 \cdot 60 = 1800$ m².

**Resultado final:** Lados perpendiculares de $30$ m y lado paralelo de $60$ m; área máxima de $1800$ m².
