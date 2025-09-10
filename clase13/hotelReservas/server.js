const net = require('net');
const { hotelController } = require('./controllers/hotelController');

const PORT = 4001;

// Creamos el servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Cuando llega un mensaje del cliente
    socket.on('data', (data) => {
        // Lo que envió el cliente (ID del hotel)
        const idHotel = parseInt(data.toString().trim(), 10);
        console.log(`Solicitud recibida: ID hotel ${idHotel}`);

        // Pedimos al controlador que resuelva la solicitud
        const respuesta = hotelController(idHotel);

        // Enviamos la respuesta al cliente
        socket.write(respuesta);

        // Cerramos la conexión con el cliente
        socket.end();
    });

    // Cuando el cliente se desconecta
    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

    // Si ocurre algún error
    socket.on('error', (err) => {
        console.error('Error:', err.message);
    });
});

// Ponemos al servidor a escuchar en el puerto 4001
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});