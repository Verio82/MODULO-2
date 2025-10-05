const { v4: uuidv4 } = require('uuid');

let tareas = [];

function agregarTarea(titulo) {
  const nuevaTarea = { id: uuidv4(), titulo };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function listarTareas() {
  return tareas;
}

module.exports = { agregarTarea, listarTareas };
