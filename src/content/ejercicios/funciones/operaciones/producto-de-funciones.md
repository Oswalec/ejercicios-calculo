---
titulo: "Producto de funciones: el dominio no se simplifica"
tema: "funciones"
seccion: "operaciones"
dificultad: "intermedio"
metodo: "Producto de funciones y dominio de la intersección"
orden: 2
---

## Enunciado

Sean $f(x) = x^2 - 4$ y $g(x) = \dfrac{1}{x + 2}$. Halla $(f \cdot g)(x)$ simplificada y su dominio.

## Solución

1. $(f \cdot g)(x) = (x^2 - 4) \cdot \frac{1}{x + 2} = \frac{(x - 2)(x + 2)}{x + 2}$.
2. El dominio es $\operatorname{Dom} f \cap \operatorname{Dom} g = \mathbb{R} \cap \left(\mathbb{R} \setminus \{-2\}\right) = \mathbb{R} \setminus \{-2\}$.
3. Para $x \neq -2$ simplificamos: $(f \cdot g)(x) = x - 2$.
4. La simplificación no cambia el dominio: aunque la expresión $x - 2$ esté definida en $-2$, $g(-2)$ no existe, así que $(f \cdot g)(-2)$ tampoco.

**Resultado final:** $(f \cdot g)(x) = x - 2$, con dominio $\mathbb{R} \setminus \{-2\}$.
