//Crea un servidor TCP que actúe como un servidor de eco.

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');

    //Evento ´data´: se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        console.log('Datos recibidos del cliente:', data.toString());
        //Enviamos una respuesta al cliente
        socket.write(data); // Echo the received data back to the client
    });

    //Evento ´end´: se emite cuando el cliente cierra la conexion de manera correcta
    socket.on('end', () => {
        console.log('El cliente ha cerrado la conexion');
    });
    //Evento close: se emite cuando el socket se cierra de manera ordenada o abrupta
    socket.on('close', () => {
        console.log('La conexion con el cliente se ha cerrado');
    });
});
    
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});