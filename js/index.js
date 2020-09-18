function random(){

    //Contenedor de las frases
    var frases = ['“La vida es mejor para aquellos que hacen lo posible para tener lo mejor” – John Wooden.',
    '“El pesimista se queja del viento, el optimista espera que cambie, el líder arregla las velas” – John C. Maxwell.',
    '“Pensad como hombres de acción, actuad como hombres pensantes“ – Tomas Mann.',
    '“La vida es mejor para aquellos que hacen lo posible para tener lo mejor” – John Wooden.',
    '“Invertir en conocimientos produce siempre los mejores beneficios” –  Benjamin Franklin.',
    '“Un experto es una persona que ha cometido todos los errores que pueden cometerse en un campo muy reducido” – Niels Bohr.',
    '“Nadie puede hacerte sentir inferior sin tu consentimiento” – Eleanor Roosevelt.',
    '“El amor propio no es el proceso de pasar por alto tus defectos. El amor propio es expandir tu conciencia para incluir tus defectos y tus puntos fuertes” – Vironika Tugaleva.',
    '“No importa cuán brillante sea tu mente o estrategia, si estás jugando solo siempre perderás ante un equipo” – Reid Hoffman.',
    '“Eres el promedio de las cinco personas con las que pasas más tiempo” – Jim Rohn.',
    'El secreto para contratar a los mejores es: busca a personas que quieran cambiar el mundo” – Marc Benioff.',
    '“Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento” – Henry Ford.'
    ];

    //Random
    h1 = document.getElementById("frase").innerHTML = frases[(Math.floor(Math.random() * frases.length))];
    return null;
}