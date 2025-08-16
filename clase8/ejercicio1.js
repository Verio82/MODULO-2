//Conectar y enviar un mensaje al servidor

//Crea un cliente TCP que se conecta a un servidor en localhost en el puerto 5000
const net = require('net');

//Cuando la conexion se establezca envia el mensaje "Hola servidor!"

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({ port: PORT, host: HOST });

client.on('connect', () => {
    console.log('Conectado al servidor!');
    client.write('Hola servidor!');
});

//Escuche los datos recibidos y los muestre en la consola
client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
});

//Ejercicio2

client.setTimeout(5000, () => {
    console.log('Tiempo de espera alcanzado, cerrando la conexion');
    client.end(); //Finaliza la conexion si se agota el tiempo
});

client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
    client.pause(); //Pausa la recepcion de datos
    setTimeout(() => {
        console.log('Reanudando la recepcion de datos');
        client.resume(); //Reanuda la recepcion de datos
    }, 3000);
});

client.on('error', (err) => {
    console.log('Error', err.message);
});

client.on('close', () => {
    console.log('Conexion cerrada inesperadamente');
});

client.on('end', () => {
    console.log('Servidor cerro la conexion');
});

//Ejercicio 6

const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

function mensajes() {
     readline.question('Escribi un mensaje', (mensaje) => {
        if (mensaje === 'salir'){
            client.end() 
            readline.close()
        }
        else {
            client.write(mensaje)
            mensajes()
        }
     })
};

client.on('connect', mensajes);

//Ejercicio7

client.on('error', () => {
    console.log('Conexion destruida');
    client.destroy();
});

//Ejercicio8

client.unref();
setTimeout(() => {
    console.log('Manteniendo proceso activo con ref');
    client.ref();
},5000);
 
//Ejercicio 9
//Crea un cliente que Si la conexión falla, reintente conectarse cada 3 segundos hasta que tenga éxito. 

function reconectar() {
    setTimeout(() => {
        console.log('🔄 Reintentando conexión...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar);
client.on('close', reconectar);

//Ejercicio 10
//Si deja de recibir datos durante 10 segundos, muestre "No hay datos del servidor" y cierre la conexión. 

let timeout = setTimeout(() => {
    console.log('⚠️ No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});
