// Servidor TCP para gestión de contraseñas (MVC)

const net = require('net');
const controlador = require('./controladores/contraseñaControlador');

const PORT = 8080;
let nextClientId = 1;

const server = net.createServer((socket) => {
  const clientId = nextClientId++;
  console.log(`Cliente #${clientId} conectado.`);

  socket.setEncoding('utf8');
  let buffer = '';

  function sendResponse(obj) {
    socket.write(JSON.stringify(obj) + '\n');
  }

  sendResponse({
    ok: true,
    message: 'Conectado al servidor de contraseñas. Comandos: agregar <usuario> <contraseña>, listar'
  });

  socket.on('data', (chunk) => {
    buffer += chunk;
    let index;
    while ((index = buffer.indexOf('\n')) !== -1) {
      const line = buffer.slice(0, index).trim();
      buffer = buffer.slice(index + 1);

      if (!line) continue;

      console.log(`Cliente #${clientId} -> ${line}`);
      const respuesta = controlador.manejarComando(line);
      sendResponse(respuesta);
    }
  });

  socket.on('end', () => console.log(`Cliente #${clientId} desconectado.`));
  socket.on('error', (err) => console.log(`Error cliente #${clientId}:`, err.message));
});

server.on('error', (err) => {
  console.error('Error en el servidor:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} ya está en uso.`);
  }
});

server.listen(PORT, () => console.log(`Servidor TCP escuchando en puerto ${PORT}`)); // Inicia el servidor