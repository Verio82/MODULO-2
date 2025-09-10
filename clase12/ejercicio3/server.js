// Importamos módulos necesarios
const net = require('net');
const path = require('path');

// Creamos el servidor TCP
const server = net.createServer((socket) => {
  console.log('🟢 Cliente conectado.');

  // Cuando el servidor recibe datos del cliente
  socket.on('data', (data) => {
    const ruta = data.toString().trim();
    console.log(`📥 Ruta recibida: ${ruta}`);

    // Usamos métodos de path para obtener la información
    const base = path.basename(ruta);      // Nombre del archivo con extensión
    const dir = path.dirname(ruta);        // Directorio
    const ext = path.extname(ruta);        // Extensión del archivo

    // Creamos una respuesta legible
    const respuesta = 
      `Directorio: ${dir}\n` +
      `Nombre base: ${base}\n` +
      `Extensión: ${ext}\n`;

    // Enviamos la información al cliente
    socket.write(respuesta);
  });

  // Cuando el cliente se desconecta
  socket.on('end', () => {
    console.log('🔴 Cliente desconectado.');
  });

  // Manejo de errores
  socket.on('error', (err) => {
    console.error('❌ Error en la conexión:', err.message);
  });
});

// El servidor escucha en el puerto 8082
const PUERTO = 8082;
server.listen(PUERTO, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PUERTO}`);
});