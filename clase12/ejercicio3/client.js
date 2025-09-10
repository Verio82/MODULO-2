// Importamos el módulo 'net' para crear el cliente TCP
const net = require('net');

// Creamos la conexión con el servidor
const client = net.createConnection({ port: 8082 }, () => {
  console.log('🟢 Conectado al servidor.');

  // Ruta de prueba (podés modificarla)
  const ruta = '/home/user/docs/file.txt';

  console.log(`📤 Enviando ruta: ${ruta}`);
  client.write(ruta);
});

// Mostramos la respuesta del servidor
client.on('data', (data) => {
  console.log('📥 Respuesta del servidor:\n' + data.toString());

  // Cerramos la conexión
  client.end();
});

// Cuando el servidor cierra la conexión
client.on('end', () => {
  console.log('🔴 Desconectado del servidor.');
});

// Manejo de errores
client.on('error', (err) => {
  console.error('❌ Error en la conexión:', err.message);
});