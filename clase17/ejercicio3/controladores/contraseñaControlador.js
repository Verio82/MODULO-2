// Maneja los comandos recibidos del cliente

const modelo = require('../modelos/contraseña');
const vista = require('../vistas/contraseñaVista');

function manejarComando(linea) {
  const partes = linea.trim().split(' ');
  const comando = partes[0].toLowerCase();

  if (comando === 'agregar') {
    const usuario = partes[1];
    const contraseña = partes[2];

    if (!usuario || !contraseña) {
      return { ok: false, error: 'Uso: agregar <usuario> <contraseña>' };
    }

    const nueva = modelo.agregarContraseña(usuario, contraseña);
    return { ok: true, data: nueva, message: 'Contraseña agregada correctamente.' };
  }

  if (comando === 'listar') {
    const lista = modelo.listarContraseñas();
    const salida = vista.formatearContraseñas(lista);
    return { ok: true, data: lista, message: salida };
  }

  return { ok: false, error: 'Comando no reconocido. Usa "agregar" o "listar".' };
}

module.exports = { manejarComando }; // Exporta la función para usarla en otros módulos