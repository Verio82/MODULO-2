// Crear un servidor y un cliente TCP que se comuniquen entre sí. El servidor debe manejar múltiples clientes y mostrar mensajes de cada uno en la consola. Los clientes deben poder enviar mensajes al servidor, y el servidor debe responder con un mensaje de confirmación. 

// Importamos el módulo "net" de Node.js que nos permite crear un servidor TCP
const net = require('net');

// Definimos el número de puerto en el que va a escuchar el servidor
const PORT = 4000;        //Cambiamos el puerto

// Diccionario de clientes conectados
let clientes = {};

// Creamos el servidor TCP
const server = net.createServer((socket) => {

    const clienteID = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`Cliente conectado: ${clienteID}`);

    // Guardamos al cliente en el objeto
    clientes[clienteID] = socket;

    // Avisamos SOLO al nuevo cliente que se conectó correctamente
    socket.write('Conectado al servidor.\n');

    // Avisamos a todos los demás clientes que hay un nuevo cliente conectado
    enviarATodos(`>>> ${clienteID} se ha conectado <<<\n`, clienteID);

    // Cuando el servidor recibe datos de un cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`Mensaje de ${clienteID}: ${mensaje}`);

        // Respuesta normal solo al cliente que envió
        socket.write(`Servidor: recibí tu mensaje -> ${mensaje}\n`);
    });

    // Cuando un cliente se desconecta
    socket.on('close', () => {
        console.log(`Cliente desconectado: ${clienteID}`);
        delete clientes[clienteID];
        enviarATodos(`>>> ${clienteID} se ha desconectado <<<\n`, clienteID);
    });

    // Manejo de errores
    socket.on('error', (err) => {
        console.log(`Error con ${clienteID}: ${err.message}`);
        delete clientes[clienteID];
    });
});

// Función para enviar un mensaje a todos los clientes excepto al remitente
function enviarATodos(mensaje, remitenteID) {
    for (let id in clientes) {
        if (id !== remitenteID) {
            clientes[id].write(mensaje);
        }
    }
}

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

