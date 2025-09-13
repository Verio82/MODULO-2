//Importamos modulo net
import net from 'net';

const PORT = 8080;
const HOST = '127.0.0.1';

// Conectar al servidor
const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log("Conectado al servidor");
});

// Recibir datos del servidor
client.on('data', (data) => {
        const respuesta = JSON.parse(data.toString());
        console.log('Mensaje del servidor: ', respuesta.mensaje);
        console.log("UUID v5 recibido:", respuesta.uuid);
        client.end();
});

client.on('end', () => {
    console.log("Conexión cerrada");
});