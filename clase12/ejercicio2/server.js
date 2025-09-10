// Importamos el módulo 'net' para crear el servidor TCP
const net = require('net');

// Importamos el módulo 'path' para trabajar con rutas
const path = require('path');

// Creamos el servidor TCP
const server = net.createServer((socket) => {
  console.log('🟢 Cliente conectado.');

  // Escuchamos los datos que envía el cliente
  socket.on('data', (data) => {
    // Convertimos el buffer recibido a string
    const rutaOriginal = data.toString().trim();

    console.log(`📥 Ruta recibida: ${rutaOriginal}`);

    // Usamos path.normalize para normalizar la ruta
    const rutaNormalizada = path.normalize(rutaOriginal);

    console.log(`📤 Ruta normalizada: ${rutaNormalizada}`);

    // Enviamos la ruta normalizada al cliente
    socket.write(`Ruta normalizada: ${rutaNormalizada}\n`);
  });

  // Detectamos cuando el cliente se desconecta
  socket.on('end', () => {
    console.log('🔴 Cliente desconectado.');
  });

  // Manejamos errores en la conexión
  socket.on('error', (err) => {
    console.error('❌ Error en la conexión:', err.message);
  });
});

// El servidor escucha en el puerto 8081
const PUERTO = 8081;
server.listen(PUERTO, () => {
  console.log(`🚀 Servidor TCP escuchando en el puerto ${PUERTO}`);
});
