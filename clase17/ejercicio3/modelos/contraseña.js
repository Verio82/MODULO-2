// Gestiona contraseñas seguras usando SHA-256 y un "sal" aleatorio

const crypto = require('crypto');

// Lista de contraseñas en memoria
const contraseñas = [];

// Función para generar un sal aleatorio
function generarSal() {
  return crypto.randomBytes(8).toString('hex'); // 16 caracteres hex
}

// Función para generar hash SHA-256 combinando contraseña + sal
function generarHash(contraseña, sal) {
  const hash = crypto.createHash('sha256');
  hash.update(contraseña + sal);
  return hash.digest('hex');
}

// Función para agregar una contraseña
function agregarContraseña(usuario, contraseña) {
  const sal = generarSal();
  const hash = generarHash(contraseña, sal);

  const entry = {
    usuario,
    sal,
    hash
  };
  contraseñas.push(entry);
  return entry;
}

// Función para listar todas las contraseñas (solo hashes)
function listarContraseñas() {
  return contraseñas.map(c => ({ usuario: c.usuario, hash: c.hash }));
}

module.exports = { agregarContraseña, listarContraseñas }; // Exporta las funciones para usarlas en otros módulos