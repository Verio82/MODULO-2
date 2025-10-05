// Maneja los comandos de los clientes de chat

const modelo = require('../modelos/mensaje');
const vista = require('../vistas/mensajeVista');

function manejarComando(linea) {
  const partes = linea.trim().split(' ');
  const comando = partes[0].toLowerCase();

  if (comando === 'enviar') {
    const usuario = partes[1];
    const contenido = partes.slice(2).join(' ').trim();

    if (!usuario || !contenido) {
      return { ok: false, error: 'Uso: enviar <usuario> <mensaje>' };
    }

    const mensaje = modelo.agregarMensaje(usuario, contenido);
    return { ok: true, data: mensaje, message: 'Mensaje enviado correctamente.' };
  }

  if (comando === 'listar') {
    const lista = modelo.listarMensajes();
    const salida = vista.formatearMensajes(lista);
    return { ok: true, data: lista, message: salida };
  }

  return { ok: false, error: 'Comando no reconocido. Usa "enviar <usuario> <mensaje>" o "listar".' };
}

module.exports = { manejarComando }; // Exporta la función para usarla en otros módulos