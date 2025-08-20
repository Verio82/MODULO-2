//Crear un cliente TCP que se conecte a un servidor, pero si la conexión se pierde, debe intentarlo nuevamente cada 3 segundos. 

const net = require('net');

const PORT = 5000;

function conectarCliente() {
    const client = net.createConnection({ port: PORT, host: 'localhost' }, () => {
        console.log('Conectado al servidor!');
        client.write('Hola servidor! Soy el cliente');
    });

    client.on('data', (data) => {
        console.log('Datos recibidos del servidor:', data.toString());
    });

     client.on('close', () => {
        console.log('Conexión cerrada. Reintentando...');
        conectarCliente();
    });

    client.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
        conectarCliente();
    });
   
}

conectarCliente();
