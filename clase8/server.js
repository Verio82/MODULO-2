//Crea un servidor TCP que cierre automáticamente la conexión con un cliente si no recibe datos en un período de 10 segundos. Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar el contador de tiempo. 

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');
    
    socket.setTimeout(10000); // 10 segundos de timeout
    
    socket.on('timeout', () => {
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos. Cerrando la conexión.');
        socket.end(); // Cerrar la conexión si se alcanza el timeout
    });

    socket.on('data', (data) => {
        console.log('Datos recibidos del cliente:', data.toString());
        socket.setTimeout(10000); // Reiniciar el timeout al recibir datos
    });
});
    
server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
