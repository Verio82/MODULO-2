// Gestiona la lista de usuarios y genera IDs únicos usando uuid

const { v4: uuidv4 } = require('uuid');

// Lista de usuarios en memoria (podés usar JSON para persistencia)
const usuarios = [];

// Función para agregar un nuevo usuario
function agregarUsuario(nombre) {
  const usuario = {
    id: uuidv4(), // ID único
    nombre: nombre
  };
  usuarios.push(usuario);
  return usuario; // Devuelve el usuario creado
}

// Función para listar todos los usuarios
function listarUsuarios() {
  return usuarios;
}

// Exportamos funciones
module.exports = {
  agregarUsuario,
  listarUsuarios
};