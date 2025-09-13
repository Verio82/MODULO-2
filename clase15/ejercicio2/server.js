//Importamos el modulo net
import net from 'net';

//Importamos el modulo uuidv5
import { v5 as uuidv5 } from 'uuid';

const PORT = 8080;

// Namespace fijo 
const NAMESPACE = uuidv5.URL ;


// Crear servidor TCP
const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    // Generar UUID v5
    const nombre = "ejemploId"
    const uuid = uuidv5(nombre, NAMESPACE);

    // Crear objeto JSON
    const respuesta = {
        mensaje: "Tu UUIDV5 es: ",
        uuid: uuid
        
    };

    // Enviar como JSON
    socket.write(JSON.stringify(respuesta));

    socket.end();
    socket.on('end', () => {
        console.log("Cliente desconectado");
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});