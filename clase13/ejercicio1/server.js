const net = require('net');
const { bookController } = require('./controllers/bookController');

const PORT = 4001;

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const idLibro = data.toString().trim();

        // Si el cliente escribe "0", se desconecta
        if (idLibro === '0') {
            console.log('Cliente pidió salir. Cerrando conexión.');
            socket.write('Conexión cerrada.\n');
            socket.end();
            return;
        }

        // Usamos el controlador para procesar la solicitud
        const respuesta = bookController(idLibro);

        socket.write(respuesta + '\n');
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error en servidor:', err.message);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
