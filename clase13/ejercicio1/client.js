const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 4001,
    host: '127.0.0.1'
};

// Conexión al servidor
const client = net.createConnection(options, () => {
    console.log('Conectado al servidor');
    pedirLibro();
});

// Función para pedir ID al usuario
function pedirLibro() {
    const idLibro = readline.question('Ingrese el ID del libro (o 0 para salir): ');
    client.write(idLibro);
}

// Cuando llega respuesta del servidor
client.on('data', (data) => {
    console.log('Servidor dice:', data.toString().trim());

    // Si el servidor confirmó cierre, desconectamos
    if (data.toString().includes('Conexión cerrada')) {
        client.end();
    } else {
        // Volvemos a preguntar por otro ID
        pedirLibro();
    }
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});

client.on('error', (err) => {
    console.error('Error en cliente:', err.message);
});
