const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON donde están los hoteles
const filePath = path.join(__dirname, '../hotels.json');

// Función que recibe un ID y devuelve el hotel correspondiente
function buscarHotelPorId(idHotel) {
    // Leemos el archivo JSON
    const data = fs.readFileSync(filePath, 'utf8');

    // Convertimos el contenido a un arreglo de objetos
    const hoteles = JSON.parse(data);

    // Buscamos el hotel con el ID indicado
    return hoteles.find(hotel => hotel.id === idHotel);
}

module.exports = { buscarHotelPorId };