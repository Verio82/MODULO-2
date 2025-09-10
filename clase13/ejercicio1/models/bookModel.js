const fs = require('fs');
const path = require('path');

// Ruta al archivo libros.json
const filePath = path.join(__dirname, 'libros.json');

function buscarLibro(idLibro) {
    // Convertimos el id que viene del cliente en número
    const id = parseInt(idLibro, 10);

    // Leemos el archivo JSON
    const data = fs.readFileSync(filePath, 'utf8');
    const libros = JSON.parse(data);

    // Buscamos el libro (== para aceptar "1" y 1 como iguales)
    const libro = libros.find(libro => libro.id == id);

    if (libro) {
        console.log("Libro encontrado:", libro.titulo);
        return libro;
    } else {
        console.log("Libro no encontrado.");
        return null;
    }
}

module.exports = { buscarLibro };