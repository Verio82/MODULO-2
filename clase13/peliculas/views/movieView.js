// Esta función recibe una película y devuelve la respuesta en formato JSON
function formatRespuesta(pelicula) {
    if (!pelicula) {
        // Si no encuentra la película, devolvemos un error
        return JSON.stringify({ error: 'Película no encontrada' });
    }

    // Si la encuentra, devolvemos la info formateada
    return JSON.stringify({
        titulo: pelicula.titulo,
        director: pelicula.director,
        anio: pelicula.anio,
        genero: pelicula.genero
    });
}

module.exports = { formatRespuesta };