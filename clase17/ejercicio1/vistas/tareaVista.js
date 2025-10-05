
function mostrarTareas(tareas) {
  if (tareas.length === 0) return "📂 No hay tareas registradas.";
  return tareas.map(t => `🆔 ${t.id} - 📌 ${t.titulo}`).join("\n");
}

function mostrarConfirmacion(tarea) {
  return `✅ Tarea agregada con éxito:\n🆔 ${tarea.id} - 📌 ${tarea.titulo}`;
}

module.exports = { mostrarTareas, mostrarConfirmacion };
