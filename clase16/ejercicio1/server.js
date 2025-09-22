// Importamos los módulos que vamos a utilizar
const net = require('net');
const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON donde se almacenarán los mensajes
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Si el archivo no existe, lo creamos vacío con un array
if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]');
}

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    // Escuchamos mensajes del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();

        if (mensaje === '/historial') {
            // Leemos y enviamos el historial de mensajes
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            socket.write(`Historial de mensajes:\n${historial}\n`);
        } else {
            // Leemos los mensajes actuales
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8'));

            // Agregamos el nuevo mensaje con fecha
            mensajes.push({ fecha: new Date().toISOString(), mensaje });

            // Guardamos en el archivo
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));

            // Confirmamos al cliente
            socket.write('Mensaje guardado con éxito ✅\n');
        }
    });

    // Manejo de evento 'end' (desconexión)
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

// Iniciamos el servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});