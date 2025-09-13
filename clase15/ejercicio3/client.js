// Importamos el módulo 'net' para conectarnos al servidor
import net from 'net';

const PORT = 8080;   // Puerto donde escucha el servidor
const HOST = '127.0.0.1'; // Dirección local (localhost)

// Creamos un cliente y lo conectamos al servidor
const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log("Conectado al servidor");
});

// Cuando llegan datos del servidor...
client.on('data', (data) => {
    // Convertimos el texto recibido en un objeto JSON
    const respuesta = JSON.parse(data.toString());

    // Mostramos en consola el UUID y la descripción
    console.log("Mensaje del servidor: ", respuesta.mensaje);
    console.log("UUID v1 recibido:", respuesta.uuid);
    
    // Cerramos la conexión después de recibir la respuesta
    client.end();
});

// Evento cuando el servidor cierra la conexión
client.on('end', () => {
    console.log("Conexión cerrada");
});