// Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte: 1. Agregar una tarea: Registrar una tarea pendiente con su descripción. 2. Listar las tareas: Mostrar todas las tareas registradas. 3. Eliminar una tarea: Eliminar una tarea de la lista. 

const fs = require('fs');
function agregarTarea(descripcion) {
    const tareas = leerTareas();

    // Verificamos si la tarea ya existe
    if (tareas.some(tarea => tarea.descripcion === descripcion)) {
        console.log(`La tarea "${descripcion}" ya está registrada.`);
        return;
    }

    tareas.push({ descripcion });
    guardarTareas(tareas);
    console.log(`Tarea "${descripcion}" agregada con éxito.`);
}

function leerTareas() {
    if (!fs.existsSync('tareas.json')) {
        return [];
    }
    const data = fs.readFileSync('tareas.json', 'utf8');
    return JSON.parse(data);
}

function listarTareas() {
    const tareas = leerTareas();
    if (tareas.length === 0) {
        console.log("No hay tareas registradas.");
        return;
    }
    console.log("Tareas pendientes:");
    tareas.forEach(tarea => console.log(`- ${tarea.descripcion}`));
}

function eliminarTarea(descripcion) {
    let tareas = leerTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (tareaIndex === -1) {
        console.log(`La tarea "${descripcion}" no está registrada.`);
        return;
    }

    tareas.splice(tareaIndex, 1);
    guardarTareas(tareas);
    console.log(`Tarea "${descripcion}" eliminada con éxito.`);
}

function guardarTareas(tareas) {
    fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2), 'utf8');
}

//Ejemplos
agregarTarea('Comprar leche');
agregarTarea('Estudiar JavaScript');
listarTareas();
eliminarTarea('Comprar leche');
listarTareas();
