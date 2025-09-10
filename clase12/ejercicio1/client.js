const net = require('net');
const readline = require('readline-sync');

// Configuración de conexión al servidor
const options = {
    port: 8080,
    host: '127.0.0.1'
};

// Creamos el cliente
const client = net.createConnection(options, () => {
    console.log('Conectado al servidor');
    enviarRuta(); // Apenas se conecta, pide la primera ruta
});

// Función para pedir y enviar rutas al servidor
function enviarRuta() {
    const ruta = readline.question('Ingrese una ruta (o "0" para salir): ');

    if (ruta === '0') {
        console.log('Cerrando conexión...');
        client.end();
    } else {
        client.write(ruta);
    }
}

// Mostramos la respuesta del servidor
client.on('data', (data) => {
    console.log('Servidor dice:', data.toString().trim());
    enviarRuta(); // volvemos a preguntar otra ruta
});

// Cuando el servidor cierra la conexión
client.on('end', () => {
    console.log('Desconectado del servidor');
});

// Manejo de errores en el cliente
client.on('error', (err) => {
    console.error('Error en cliente:', err.message);
});