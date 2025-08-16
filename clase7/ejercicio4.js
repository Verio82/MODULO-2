//Crea un servidor TCP que maneje errores de conexión de manera adecuada. Si ocurre un error en la conexión con un cliente, el servidor debe imprimir un mensaje de error en la consola y cerrar la conexión con ese cliente. Además, el servidor debe seguir funcionando y aceptando nuevas conexiones

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');

    socket.on('error', (err) => {
        console.error('Error en la conexión con el cliente:', err.message);
        socket.destroy();// Cerrar la conexión en caso de error
    });
        
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

    