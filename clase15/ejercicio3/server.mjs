// Importamos el módulo 'net' para crear el servidor TCP
import net from 'net';
// Importamos la función v1 de uuid, que genera UUIDs basados en el tiempo y la dirección MAC
import { v1 as uuidv1 } from 'uuid';

const PORT = 8080; // Puerto en el que el servidor va a escuchar

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    // Generamos un UUID v1 (depende del tiempo y la MAC de la máquina)
    const id = uuidv1();

    // Armamos un objeto con el UUID
    const respuesta = {
        mensaje: "Tu UUIDV1 es: ",
        uuid: id,
        
    };

    // Convertimos el objeto a JSON y se lo enviamos al cliente
    socket.write(JSON.stringify(respuesta));

    // Cerramos la conexión con el cliente después de enviar los datos
    socket.end();

    // Evento cuando el cliente se desconecta
    socket.on('end', () => {
        console.log("Cliente desconectado");
    });
});

// Le decimos al servidor que escuche en el puerto definido
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
