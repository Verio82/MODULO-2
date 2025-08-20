// Implementar un timeout que cierre la conexión si no recibe datos en 10 segundos.

const net = require('net');

const client = net.createConnection({port:5000}, () => {
    console.log('Un cliente se ha conectado al servidor');
    client.write('Hola servidor!');
});

const timeOut = setTimeout(() => {
    console.log('Se termino el tiempo de espera. Destruyendo la conexion');
    client.destroy();
}, 10000);    

 client.on('data', (data) => {
    console.log('Datos recibidos: ', data.toString() );
    clearTimeout(timeOut);

 });
