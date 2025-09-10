const { buscarPeliculaPorTitulo } = require('../models/movieModel');
const { formatRespuesta } = require('../views/movieView');

// Esta función conecta al modelo con la vista
function movieController(titulo) {
    // El modelo busca la película
    const pelicula = buscarPeliculaPorTitulo(titulo);

    // La vista formatea la respuesta
    return formatRespuesta(pelicula);
}

module.exports = { movieController };