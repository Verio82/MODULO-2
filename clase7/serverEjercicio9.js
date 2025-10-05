// server.js
const net = require('net');
const fs = require('fs');
const path = require('path');

// Tamaño máximo del archivo: 1 MB
const MAX_SIZE = 1 * 1024 * 1024; // bytes

// Carpeta donde se guardarán los archivos
const UPLOAD_DIR = path.join(__dirname, 'uploads');

// Crear carpeta si no existe
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const server = net.createServer((socket) => {
  console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

  let fileBuffer = []; // Para almacenar los chunks
  let totalSize = 0;
  let fileName = null;

  socket.write('Ingrese el nombre del archivo:\n');

  socket.on('data', (data) => {
    const mensaje = data.toString().trim();

    // Paso 1: recibir nombre de archivo
    if (!fileName) {
      fileName = mensaje;
      socket.write(`Esperando el contenido del archivo ${fileName}...\n`);
      return;
    }

    // Convertimos el mensaje a buffer y guardamos
    const chunk = Buffer.from(data);
    totalSize += chunk.length;

    // Verificamos el tamaño máximo
    if (totalSize > MAX_SIZE) {
      socket.write('Error: archivo demasiado grande. Conexión cerrada.\n');
      socket.end();
      return;
    }

    fileBuffer.push(chunk);
    socket.write(`Recibido ${totalSize} bytes hasta ahora...\n`);
  });

  socket.on('end', () => {
    if (fileBuffer.length > 0) {
      const finalBuffer = Buffer.concat(fileBuffer);

      // Guardamos el archivo en el servidor
      const filePath = path.join(UPLOAD_DIR, fileName);
      fs.writeFile(filePath, finalBuffer, (err) => {
        if (err) {
          console.log('Error al guardar archivo:', err);
          socket.write('Error al guardar el archivo en el servidor.\n');
        } else {
          console.log(`Archivo ${fileName} guardado correctamente (${totalSize} bytes)`);
          socket.write('Archivo recibido y guardado correctamente.\n');
        }
        socket.end();
      });
    } else {
      socket.write('No se recibió ningún archivo.\n');
      socket.end();
    }
  });

  socket.on('error', (err) => {
    console.log('Error:', err.message);
  });
});

// Escuchamos en el puerto 9090
server.listen(8080, () => {
  console.log('Servidor de transferencia de archivos escuchando en el puerto 9090');
});