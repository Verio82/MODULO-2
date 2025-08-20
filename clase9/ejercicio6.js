//Crear un cliente TCP que intente reconectarse si la conexión se pierde, pero que abandone después de 5 intentos fallidos. 

const net = require('net');

let contadorIntentos = 0;
const MAX_INTENTOS = 5;

function conectarCliente() {
    if (contadorIntentos >= MAX_INTENTOS) {
        console.log('Máximo de intentos alcanzado. Cerrando el programa.');
        return;
    };

    const client = net.createConnection({ port: 5000}, () => {
        console.log('Conectado al servidor!');
        client.write('Hola servidor!');
        contadorIntentos = 0;
    });

    client.on('data', (data) => {
        console.log('Datos recibidos del servidor:', data.toString());
    });

    client.on('close', () => {
        console.log('Conexión cerrada. Reintentando...');
        contadorIntentos++;
        if (contadorIntentos < MAX_INTENTOS) {
            setTimeout(conectarCliente, 2000);
        } else {
            console.log('Máximo de intentos alcanzado. Abandonando.');
        }
    });

    client.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
        contadorIntentos++;
        if (contadorIntentos < MAX_INTENTOS) {
            setTimeout(conectarCliente, 3000);
        } else {
            console.log('Máximo de intentos alcanzado. Abandonando.');
        }
    });
}