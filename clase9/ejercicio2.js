//Crear un cliente TCP que se conecte a un servidor en el puerto 5000

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    console.log('Conectado al servidor!');
    client.write('Hola servidor! Soy el cliente');
});

client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString)    
});
    
setTimeout(() => {
    console.log('Pausando la recepcion de datos...');
    client.pause();
}, 3000);

setTimeout(() => {
    console.log('Reanudando la recepcion de datos...');
    client.resume();
}, 8000);

 setTimeout(() => {
    console.log('Finalizando la conexion');
    client.end();
}, 15000);
 