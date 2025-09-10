const net = require('net');
const path = require('path');

// Puerto donde va a escuchar el servidor
const PORT = 8080;

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        const ruta = data.toString().trim(); // Convertimos lo que mandó el cliente a string limpio
        console.log(`Ruta recibida: ${ruta}`);

        // Verificamos si la ruta es absoluta o relativa
        if (path.isAbsolute(ruta)) {
            socket.write(`La ruta "${ruta}" es ABSOLUTA\n`);
        } else {
            socket.write(`La ruta "${ruta}" es RELATIVA\n`);
        }
    });

    // Cuando el cliente se desconecta
    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

    // Si ocurre un error en la conexión
    socket.on('error', (err) => {
        console.error('Error en servidor:', err.message);
    });
});

// El servidor empieza a escuchar
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});