//Crea un servidor TCP que lleve un contador de cuántos clientes se han conectado. Cada vez que un nuevo cliente se conecta, el servidor debe enviarle un mensaje indicando cuántos clientes se han conectado hasta ese momento. Cuando un cliente se desconecta, el servidor debe reducir el contador. 

const net = require('net');
let clientCount = 0;

const server = net.createServer((socket) => {
    clientCount++;
    console.log(`Un cliente se ha conectado al servidor. Total de clientes: ${clientCount}`);
    
    // Envía el número de conexiones al cliente.
    socket.write(`Bienvenido. Eres el cliente número ${connectionCount}.\n`);


    socket.on('close', () => {
        clientCount--;
        console.log(`Un cliente se ha desconectado. Total de clientes: ${clientCount}`);
    });

});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
