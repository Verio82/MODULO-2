// Importamos el módulo net para crear el servidor TCP
import net from "net";

const PORT = 5000; // Puerto del servidor
const clients = []; // Array para guardar las conexiones de los clientes

// Creamos el servidor
const server = net.createServer((socket) => {
    // Obtenemos la dirección del cliente
    const clientName = `${socket.remoteAddress}:${socket.remotePort}`;

    console.log(`✅ Cliente conectado: ${clientName}`);
    clients.push(socket);

    // Notificamos a los demás clientes que alguien se conectó
    broadcast(`🔔 ${clientName} se ha unido al chat.`, socket);

    // Escuchamos mensajes del cliente
    socket.on("data", (data) => {
        const mensaje = data.toString().trim();
        console.log(`💬 ${clientName}: ${mensaje}`);

        // Reenviamos el mensaje a los demás clientes
        broadcast(`💬 ${clientName}: ${mensaje}`, socket);
    });

    // Cuando un cliente se desconecta
    socket.on("end", () => {
        console.log(`❌ Cliente desconectado: ${clientName}`);
        clients.splice(clients.indexOf(socket), 1);
        broadcast(`🔕 ${clientName} salió del chat.`, socket);
    });

    // Manejo de errores (por ejemplo, si un cliente se cierra inesperadamente)
    socket.on("error", (err) => {
        console.error(`⚠️ Error con ${clientName}: ${err.message}`);
    });
});

// Función para enviar mensajes a todos menos al remitente
function broadcast(mensaje, remitente) {
    clients.forEach((client) => {
        if (client !== remitente) {
            client.write(mensaje + "\n");
        }
    });
}

// El servidor escucha en el puerto definido
server.listen(PORT, () => {
    console.log(`🚀 Servidor de chat grupal escuchando en el puerto ${PORT}`);
});
