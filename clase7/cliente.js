const net = require('net');
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor!')
    client.write('Cualquier mensaje');
});
client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
    client.end();
});
client.on('end', () => {
    console.log('Desconectado del servidor');
});