//Funcion para formatera la respuesta de libro 

const formatRespuesta = (book) => {
    if (!book) {
        return JSON.stringify({ error: 'Libro no encontrado' });
    }
    return JSON.stringify(book, null, 2);
};

module.exports = { formatRespuesta };
