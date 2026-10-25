---
titulo: "La sombra de una persona que se aleja de un poste"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "intermedio"
metodo: "Tasas relacionadas con triángulos semejantes"
orden: 3
---

## Enunciado

Una persona de $1.8$ m de estatura se aleja a $1.2$ m/s de un poste de luz de $6$ m de altura. ¿Con qué rapidez crece su sombra? ¿Con qué rapidez se mueve el extremo de la sombra?

## Solución

1. Sea $x$ la distancia de la persona al poste y $s$ la longitud de su sombra. Por triángulos semejantes: $\frac{6}{x + s} = \frac{1.8}{s}$.
2. Despejamos: $6s = 1.8x + 1.8s$, es decir, $4.2s = 1.8x$, de donde $s = \frac{3}{7}x$.
3. Derivamos: $\frac{ds}{dt} = \frac{3}{7}\frac{dx}{dt} = \frac{3}{7}(1.2) = \frac{18}{35} \approx 0.514$ m/s. La rapidez no depende de la posición.
4. El extremo de la sombra está a $x + s$ del poste, así que se mueve a $1.2 + \frac{18}{35} = \frac{12}{7} \approx 1.714$ m/s.

**Resultado final:** La sombra crece a $\dfrac{18}{35} \approx 0.514$ m/s y su extremo se mueve a $\dfrac{12}{7} \approx 1.714$ m/s.
