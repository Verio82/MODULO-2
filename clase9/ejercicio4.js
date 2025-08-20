//Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 20 segundos. 

const net = require('net')

const client = net.createConnection({port:5000}, () => {
    console.log('Conectado al servidor!');
    client.write('Hola servidor!');
});

setInterval(() => {
    console.log('Enviando mensaje...');
    client.write('Mensaje automatico');
}, 5000);

client.on('data', (data) => {
    console.log('Datos recibidos: ', data.toString());
});

setTimeout(() => {
    console.log('Cerrando la conexion...');
    client.end();
}, 20000);
