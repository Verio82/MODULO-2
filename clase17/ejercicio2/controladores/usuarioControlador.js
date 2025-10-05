// Procesa los comandos recibidos del cliente

const modelo = require('../modelos/usuario');
const vista = require('../vistas/usuarioVista');

function manejarComando(linea) {
  const partes = linea.trim().split(' ');
  const comando = partes[0].toLowerCase();

  if (comando === 'agregar') {
    const nombre = partes.slice(1).join(' ').trim();
    if (!nombre) {
      return { ok: false, error: 'Falta el nombre. Uso: agregar <nombre>' };
    }
    const usuario = modelo.agregarUsuario(nombre);
    return { ok: true, data: usuario, message: 'Usuario agregado correctamente.' };
  }

  if (comando === 'listar') {
    const usuarios = modelo.listarUsuarios();
    const salida = vista.formatearUsuarios(usuarios);
    return { ok: true, data: usuarios, message: salida };
  }

  return { ok: false, error: 'Comando no reconocido. Usa "agregar <nombre>" o "listar".' };
}

module.exports = { manejarComando }; // Exportamos la función