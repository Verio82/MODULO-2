// Gestiona los mensajes de chat usando UUID para identificadores únicos

const { v4: uuidv4 } = require('uuid');

// Lista de mensajes en memoria
const mensajes = [];

// Función para agregar un mensaje
function agregarMensaje(usuario, contenido) {
  const mensaje = {
    id: uuidv4(),  // ID único
    usuario,
    contenido
  };
  mensajes.push(mensaje);
  return mensaje; // Devuelve el mensaje agregado
}

// Función para listar todos los mensajes
function listarMensajes() {
  return mensajes;
}

module.exports = { agregarMensaje, listarMensajes }; // Exporta las funciones para usarlas en otros módulos