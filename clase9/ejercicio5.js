//Conectarse y enviar un mensaje inicial. 

const net = require('net');

const client = net.createConnection({port:5000}, () => {
    console.log('Conectado al servidor');
    client.write('Hola servidor!');
    
});

client.on('data', (data) => {
    console.log('Datos recibidos: ', data.toString);
    
});

client.on('close', () => {
    console.log('Conexion cerrada inesperadamente');
    
});

client.end('end', () => {
    console.log('El servidor cerro la conexion');
    
});

client.on('error', (err) => {
    console.log('Erro', err.message);
});

setTimeout(() => {
    console.log('Manteniendo proceso activo...');
    client.unref();
}, 10000);

setTimeout(() => {
    console.log('Reanudando el proceso...');
    client.ref();
});

setTimeout(() => {
    console.log('Finalizando la conexion...');
    client.end();
}, 20000);