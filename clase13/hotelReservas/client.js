const net = require('net');
const readline = require('readline-sync');

// Configuración de la conexión al servidor
const options = {
    port: 4001,
    host: '127.0.0.1'
};

// Creamos el cliente y lo conectamos al servidor
const client = net.createConnection(options, () => {
    console.log('Conectado al servidor');

    // Pedimos al usuario que ingrese un ID de hotel
    const idHotel = readline.question('Ingrese el ID del hotel a consultar: ');

    // Enviamos el ID al servidor
    client.write(idHotel);
});

// Cuando el servidor responde
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());

    // Cerramos la conexión
    client.end();
});

// Cuando el cliente se desconecta
client.on('end', () => {
    console.log('Desconectado del servidor');
});