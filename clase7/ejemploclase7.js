//Importamos el modulo net de Node.js
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');

    //Evento ´data´: se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        console.log('Datos recibidos del cliente:', data.toString());
        //Enviamos una respuesta al cliente
        socket.write('Mensaje recibido por el servidor');
    });

    //Evento ´end´: se emite cuando el cliente cierra la conexion de manera correcta
    socket.on('end', () => {
        console.log('El cliente ha cerrado la conexion');
    });
    
    //Evento error: es el evento que se emite cuando ocurre un error dentro del socket
    socket.on('error', (err) => {
        console.error('Error en la conexion:', err.message);
    });

    //Evento close: se emite cuando el socket se cierra de manera ordenada o abrupta
    socket.on('close', () => {
        console.log('La conexion con el cliente se ha cerrado');
    });

    //Evento timeout: se emite cuando se alcanza el tiempo de espera definido por setTimeout sin recibir datos
    socket.on('timeout', () => {
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos');
        //Podemos cerrar la conexion si se alcanzo el tiempo de espera
        socket.end();
    });

    //Configuracion del tiempo de espera (timeout) para la conexion
    socket.setTimeout(5000); //5000 milisegundos = 5 segundos

});

//Evento connection: se va a emitir cuando un nuevo cliente se conecta al servidor
//Este evento se asocia al servidor, no al socket de forma individual
server.on("connection", (socket) => {
    console.log("Nueva conexion establecida");
});

//Poner al servidor a escuchar en el puerto especifico  
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//Evento listening: se emite cuando el servidor comienza a escuchar en el puerto especificado
server.on('listening', () => {
    console.log('El servidor esta listo para recibir la conexion');
});

//Evento error: se emite cuando ocurre un error al intentar iniciar el servidor o durante su operacion
server.on('error', (err) => {
    console.error('Error al iniciar el servidor:', err.message);
    
});

//Evento close: se emite cuando el servidor se cierra 
server.on('close', () => {
    console.log('El servidor se ha cerrado');
});