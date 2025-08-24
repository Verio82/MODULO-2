// Crear un servidor y un cliente TCP que se comuniquen entre sí. El servidor debe manejar múltiples clientes y mostrar mensajes de cada uno en la consola. Los clientes deben poder enviar mensajes al servidor, y el servidor debe responder con un mensaje de confirmación. 

// Importamos el módulo "net" de Node.js que nos permite crear un servidor TCP
const net = require('net');

// Definimos el número de puerto en el que va a escuchar el servidor
const PORT = 5000;

// Creamos el servidor TCP
const server = net.createServer();

// Cuando un cliente se conecta, se dispara el evento "connection"
server.on('connection', (socket) => {
    const clienteID = `${socket.remoteAddress} - ${socket.remotePort}`;    // Identificamos al cliente con su dirección IP y su puerto
    socket.on('data', (data) => {
        console.log('Mensaje del cliente: ', clienteID, data.toString());  // Responde al cliente confirmando que recibió el mensaje
        socket.write('Mensaje recibido!');
    })
    socket.on('close', () => {          // Cuando el cliente se desconecta
        console.log('Cliente desconectado: ', clienteID );
    })
    socket.on('error', (err) => {       // Si ocurre algún error en la conexión
        console.log('Error', err.message, clienteID);
    })

})


// Ponemos al servidor a "escuchar" en el puerto definido
server.listen(PORT, () => {
    console.log('El servidor esta escuchando en el puerto ' , PORT);
        
})