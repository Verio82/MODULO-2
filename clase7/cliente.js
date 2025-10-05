const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 8080 }, () => {
  console.log('Conectado al servidor!');
});

// Mostrar datos recibidos del servidor
client.on('data', (data) => {
  console.log(data.toString());
});

// Detectar desconexión del servidor
client.on('end', () => {
  console.log('Desconectado del servidor');
});

// Leer mensajes desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  client.write(line); // enviar mensaje al servidor
});