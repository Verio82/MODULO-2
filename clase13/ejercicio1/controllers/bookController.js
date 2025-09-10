

const { buscarLibro } = require('../models/bookModel');
const { formatRespuesta } = require('../views/bookView');

// Función para manejar la solicitud del cliente
const bookController = (idLibro) => {
    const libro = buscarLibro(idLibro);
    return formatRespuesta(libro);
};

module.exports = { bookController };