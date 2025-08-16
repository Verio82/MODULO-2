// Importamos el modulo
const net = require('net');

//Configuracion de la conexion

const PORT = 5000;
const HOST = 'localhost';

//Creamos la conexion con el servidor usando net.createConnection
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    //Mensaje de conexion exitosa
    console.log('Conectado al servidor!');

    //Enviamos un mensaje inicial al servidor
    client.write('Hola servidor!');

    //Configuramos un tiempo de espera de 10 segundos utilizando setTimeout
    client.setTimeout(10000,() => {
        console.log('Tiempo de espera alcanzado, cerrando la conexion');
        client.end(); //Finaliza la conexion si se agota el tiempo
    });
    //Pausamos la recepcion de datos despues de 2 segundos
    setTimeout(() => {
        console.log('Pausando la recepcion de datos...');
        client.pause(); 

        //Reanudamos la recepcion de datos despues de 3 segundos
        setTimeout(() => {
            console.log('Reanudando la recepcion de datos');
            client.resume(); //Reanuda la recepcion de datos
        }, 3000);
    }, 2000);

});

//MAnejo de eventos (lo vemos en clase 9)

//Manejo el evento data para recibir datos del servidor
client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
});

//Manejo del evento end
client.on('end', () => {
    console.log('Desconectado del servidor');
});

//Manejo del evento error
client.on('error', (err) => {
    console.error('Error en la conexion:', err.message);
});

//Manejo del evento close
client.on('close', () => {
    console.log('Conexion cerrada');
});

//Destruimos el socket despues de 15 segundos con destroy para liberar recursos
setTimeout(() => {
    console.log('Destruyendo el socket para liberar recursos');
    client.destroy(); //Destruye el socket
}, 15000);


