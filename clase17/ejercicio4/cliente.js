// cliente.js
const net = require('net');
const readline = require('readline');

// Conexión al servidor TCP
const client = net.createConnection({ port: 8080 }, () => {
  console.log('✅ Conectado al servidor de chat.');
  console.log('Usá "/salir" para desconectarte.');
});

// Mostrar respuestas del servidor
client.on('data', (data) => {
  // Cada respuesta llega como JSON por línea
  const lineas = data.toString().split('\n').filter(l => l.trim() !== '');
  lineas.forEach((linea) => {
    const resp = JSON.parse(linea);
    if (resp.ok) {
      // Mostramos el mensaje legible si existe
      if (resp.message) console.log(resp.message);
      // Para depuración también podrías mostrar resp.data si querés
    } else {
      console.log('❌ Error:', resp.error);
    }
  });
});

// Manejo de desconexión
client.on('end', () => {
  console.log('👋 Desconectado del servidor.');
  rl.close();
});

// Leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enviar comandos al servidor
rl.on('line', (input) => {
  const texto = input.trim();
  if (texto.toLowerCase() === '/salir') {
    client.end();
  } else {
    // Siempre enviar línea terminada en '\n'
    client.write(texto + '\n');
  }
});