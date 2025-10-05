// server.js
const net = require('net');

// Array para almacenar el historial de mensajes
let messageHistory = []; // Máximo 10 mensajes

const MAX_HISTORY = 10;

const server = net.createServer((socket) => {
  console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

  // Enviar historial al cliente recién conectado
  if (messageHistory.length > 0) {
    socket.write('Historial de mensajes:\n');
    messageHistory.forEach((msg, index) => {
      socket.write(`${index + 1}: ${msg}\n`);
    });
  } else {
    socket.write('No hay mensajes en el historial.\n');
  }

  // Escuchamos mensajes nuevos
  socket.on('data', (data) => {
    const mensaje = data.toString().trim();

    if (mensaje.length === 0) return; // Ignorar mensajes vacíos

    // Guardamos en el historial
    messageHistory.push(mensaje);

    // Limitamos el historial a los últimos 10 mensajes
    if (messageHistory.length > MAX_HISTORY) {
      messageHistory.shift();
    }

    console.log(`Nuevo mensaje: ${mensaje}`);

    // Confirmamos al cliente que se recibió el mensaje
    socket.write(`Mensaje recibido: ${mensaje}\n`);
  });

  socket.on('close', () => {
    console.log('Cliente desconectado');
  });

  socket.on('error', (err) => {
    console.log('Error:', err.message);
  });
});

// Escuchamos en el puerto 7070
server.listen(8080, () => {
  console.log('Servidor de chat con historial escuchando en el puerto 8080');
});