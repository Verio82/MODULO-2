// Función que recibe un hotel y lo devuelve en formato JSON listo para enviar
function formatRespuesta(hotel) {
    // Si el hotel no existe, devolvemos un error
    if (!hotel) {
        return JSON.stringify({ error: 'Hotel no encontrado' });
    }

    // Si existe, devolvemos la info importante
    return JSON.stringify({
        id: hotel.id,
        nombre: hotel.nombre,
        habitacionesDisponibles: hotel.habitacionesDisponibles
    });
}

module.exports = { formatRespuesta };
