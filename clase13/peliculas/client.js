const net = require('net');
const readline = require('readline-sync');

// Configuración de conexión con el servidor
const options = {
    port: 4002,
    host: '127.0.0.1'
};

// Creamos la conexión
const client = net.createConnection(options, () => {
    console.log('Conectado al servidor');

    // Pedimos al usuario el título de la película
    const titulo = readline.question('Ingrese el título de la película que desea consultar: ');
    client.write(titulo); // Lo enviamos al servidor
});

// Mostramos la respuesta del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
    client.end(); // Cerramos conexión
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});