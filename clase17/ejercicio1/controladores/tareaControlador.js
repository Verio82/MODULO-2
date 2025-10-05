const { agregarTarea, listarTareas } = require('../modelos/tarea');
const { mostrarTareas, mostrarConfirmacion } = require('../vistas/tareaVista');

function procesarComando(comando) {
  const partes = comando.trim().split(" ");
  const accion = partes[0].toLowerCase();

  switch (accion) {
    case "agregar":
      const titulo = partes.slice(1).join(" ");
      if (!titulo) return "❌ Debes escribir un título para la tarea.";
      const nuevaTarea = agregarTarea(titulo);
      return mostrarConfirmacion(nuevaTarea);

    case "listar":
      return mostrarTareas(listarTareas());

    default:
      return "❌ Comando no reconocido. Usa:\n- agregar <titulo>\n- listar";
  }
}

module.exports = { procesarComando };