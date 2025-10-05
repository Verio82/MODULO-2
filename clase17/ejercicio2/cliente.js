// cliente.js
const net = require("net");
const readline = require("readline");

// Conectamos al servidor en el puerto 8080
const client = net.createConnection({ port: 8080 }, () => {
  console.log("✅ Conectado al servidor TCP.");
  console.log('Escribe "/salir" para desconectarte.');
});

// Mostrar respuestas del servidor (sin try/catch)
client.on("data", (data) => {
  console.log(data.toString());
});

// Manejo de desconexión
client.on("end", () => {
  console.log("👋 Desconectado del servidor.");
  rl.close();
});

// Configurar lectura desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enviar lo que escriba el usuario al servidor
rl.on("line", (input) => {
  if (input.trim().toLowerCase() === "/salir") {
    client.end(); // Cierra la conexión
  } else {
    client.write(input + '\n'); // Envía línea completa
  }
});