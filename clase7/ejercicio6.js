//Crea un servidor TCP que permita a los clientes enviar comandos simples. Dependiendo del comando recibido, el servidor debe realizar una acción específica: • Si el cliente envía "fecha", el servidor debe responder con la fecha y hora actual. • Si el cliente envía "ip", el servidor debe responder con la dirección IP del cliente. • Si el cliente envía "salir", el servidor debe cerrar la conexión. • Para cualquier otro comando, el servidor debe responder "Comando no reconocido". 

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor.');

    socket.on('data', (data) => {
        const command = data.toString().trim();
        
        switch (command) {
            case 'fecha':
                socket.write('Fecha y hora actual: ' + new Date().toString() + '\n');
                break;
            case 'ip':
                socket.write('Tu dirección IP es: ' + socket.remoteAddress + '\n');
                break;
            case 'salir':
                socket.write('Cerrando conexión...\n');
                socket.end();
                break; // Salimos del evento para no enviar más datos.
            default:
                socket.write('Comando no reconocido.\n');
        }
});

    socket.on('end', () => {
        console.log('Cliente desconectado del servidor.');
    });

});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
