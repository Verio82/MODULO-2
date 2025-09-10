const { buscarHotelPorId } = require('../models/hotelModel');
const { formatRespuesta } = require('../views/hotelView');

// El controlador recibe un ID de hotel
function hotelController(idHotel) {
    // Le pide al modelo que busque el hotel en el archivo JSON
    const hotel = buscarHotelPorId(idHotel);

    // Pasa el resultado a la vista para darle formato
    return formatRespuesta(hotel);
}

module.exports = { hotelController };