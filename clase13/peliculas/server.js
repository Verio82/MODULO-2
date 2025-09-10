const net = require('net');
const { movieController } = require('./controllers/movieController');

// Puerto donde escuchará el servidor
const PORT = 4002;

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        const titulo = data.toString().trim(); // Obtenemos el título enviado
        console.log(`Solicitud recibida: ${titulo}`);

        // Pasamos el título al controlador
        const respuesta = movieController(titulo);

        // Enviamos la respuesta al cliente
        socket.write(respuesta);

        // Cerramos la conexión después de responder
        socket.end();
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error:', err.message);
    });
});

// El servidor se pone a escuchar
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});