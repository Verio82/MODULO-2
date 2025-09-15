// Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, los valide antes de enviarlos y cierre la conexión si se recibe una respuesta específica del servidor. 
// Importamos los módulos necesarios
import net from "net";
import readline from "readline";

// Configuración de la conexión
const PORT = 5000;
const HOST = "127.0.0.1"; // Localhost

// Creamos la interfaz para leer lo que escribe el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos el cliente TCP
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log(`📡 Conectado al servidor en ${HOST}:${PORT}`);
    console.log("👉 Escribe un comando (ej: CMD_HOLA, CMD_ADIOS).");
});

// Escuchamos datos que llegan del servidor
client.on("data", (data) => {
    const respuesta = data.toString().trim();
    console.log(`📨 Respuesta del servidor: ${respuesta}`);

    // Si la respuesta es EXIT → cerramos todo
    if (respuesta === "EXIT") {
        console.log("👋 El servidor pidió desconexión. Cerrando cliente...");
        rl.close();
        client.end();
        process.exit(0);
    }
});

// Manejo de errores
client.on("error", (err) => {
    console.error("❌ Error en la conexión:", err.message);
    rl.close();
    process.exit(1);
});

// Evento al cerrar la conexión
client.on("end", () => {
    console.log("🔌 Desconectado del servidor.");
    rl.close();
});

// Escuchar lo que escribe el usuario en consola
rl.on("line", (input) => {
    const comando = input.trim();

    // Validamos que el comando empiece con CMD_
    const regex = /^CMD_[A-Z]+$/; 
    if (regex.test(comando)) {
        client.write(comando); // Enviamos al servidor
    } else {
        console.log("⚠️ Comando inválido. Solo se permiten comandos que empiecen con CMD_ (ej: CMD_HOLA).");
    }
});