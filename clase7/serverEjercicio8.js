const net = require('net');

// Definimos un usuario y contraseña de ejemplo
const USERNAME = 'usuario';
const PASSWORD = '1234';

// Creamos el servidor TCP
const server = net.createServer((socket) => {
  console.log('Cliente conectado desde', socket.remoteAddress, socket.remotePort);

  // Estado de la conexión: si ya autenticó o no
  let authenticated = false;

  // Paso 1: Pedimos el nombre de usuario
  socket.write('Ingrese su nombre de usuario:\n');

  // Escuchamos los datos enviados por el cliente
  socket.on('data', (data) => {
    const mensaje = data.toString().trim();

    if (!authenticated) {
      // Si aún no autenticó, primero verificamos el usuario
      if (!socket.username) {
        socket.username = mensaje;
        socket.write('Ingrese su contraseña:\n');
      } else {
        // Verificamos la contraseña
        if (socket.username === USERNAME && mensaje === PASSWORD) {
          authenticated = true;
          socket.write('Autenticación exitosa. Ahora puede enviar mensajes.\n');
          console.log(`Cliente ${socket.username} autenticado`);
        } else {
          socket.write('Credenciales incorrectas. Conexión cerrada.\n');
          socket.end(); // Cerramos la conexión
        }
      }
    } else {
      // Cliente ya autenticado: simplemente mostramos el mensaje
      console.log(`${socket.username}: ${mensaje}`);
      socket.write(`Mensaje recibido: ${mensaje}\n`);
    }
  });

  socket.on('close', () => {
    console.log('Cliente desconectado');
  });

  socket.on('error', (err) => {
    console.log('Error:', err.message);
  });
});

// Escuchamos en el puerto 8080
server.listen(8080, () => {
  console.log('Servidor TCP escuchando en el puerto 8080');
});