//Crea un servidor TCP que permita a los clientes enviar mensajes. El servidor debe responder con un mensaje personalizado dependiendo del contenido del mensaje recibido

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');

    socket.on('data', (data) => {
        const mensaje = data.toString();
        
        // Respuesta personalizada según el mensaje recibido
        if (mensaje === 'Hola') {
            socket.write('¡Bienvenido!');
        } else if (mensaje === 'Adiós') {
            socket.write('¡Hasta luego!');
            socket.end(); // Cerrar la conexión si el mensaje es 'Adiós'
            
        } else {
            socket.write(`Mensaje recibido: ${mensaje}`);
        }
    });

});
    
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});