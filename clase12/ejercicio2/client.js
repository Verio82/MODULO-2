// Importamos el módulo 'net' para crear una conexión TCP
const net = require('net');

// Creamos una conexión con el servidor en el puerto 8081
const client = net.createConnection({ port: 8081 }, () => {
  console.log('🟢 Conectado al servidor TCP.');

  // Enviamos una ruta para normalizar
  // Podés cambiar esta ruta para probar distintos casos
  const ruta = './carpeta//subcarpeta/../archivo.txt';

  console.log(`📤 Enviando ruta: ${ruta}`);
  client.write(ruta);
});

// Recibimos la respuesta del servidor
client.on('data', (data) => {
  console.log(`📥 Respuesta del servidor: ${data.toString()}`);

  // Cerramos la conexión después de recibir la respuesta
  client.end();
});

// Detectamos cuando el servidor cierra la conexión
client.on('end', () => {
  console.log('🔴 Desconectado del servidor.');
});

// Manejamos errores de conexión
client.on('error', (err) => {
  console.error('❌ Error en la conexión:', err.message);
});