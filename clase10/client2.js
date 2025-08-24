// Importamos el módulo "net" de Node.js que nos permite trabajar con conexiones TCP
const net = require('net');

// Importamos "readline-sync" para poder leer lo que el usuario escriba en la consola
const readline = require('readline-sync');

// Definimos las opciones de conexión: el puerto y la dirección del servidor
const options = {
    port:4000,       //Cambiamos el puerto 
    host:'127.0.0.1'
};

// Creamos un cliente TCP y nos conectamos con el servidor usando esas opciones
const client = net.createConnection( (options) )
client.on('connect' , () => {
    console.log('Conexion satisfactoria!');
    mensajes();
});

// Evento que se ejecuta cuando la conexión con el servidor se realiza con éxito
client.on('data', (data) => {
     console.log('El servidor dice: ', data.toString());
     mensajes();
     
});

// Evento que se ejecuta si ocurre un error en la conexión
client.on('error', (err) => {
    console.error('Error:', err.message);
    
});

// Función que pide al usuario que escriba un mensaje
function mensajes() {
    let mensaje = readline.question('Ingrese un comando, para salir escriba 0');
    if (mensaje === '0'){        // Si el usuario escribe "0", el cliente se desconecta del servidor
        console.log('El cliente se ha desconectado');
        client.end();
    }
    else {                        // Si no, se envía el mensaje al servidor
        client.write(mensaje)
    }
            
};