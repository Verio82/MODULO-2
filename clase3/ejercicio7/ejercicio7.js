//Crea un programa para gestionar tus tareas diarias. El programa debe permitirte: 1. Agregar una tarea diaria: Registrar una nueva tarea con su descripción y estado. 2. Listar las tareas diarias: Mostrar todas las tareas con su estado. 3. Marcar una tarea como completada: Cambiar el estado de una tarea de "pendiente" a "completada". 

const fs = require('fs');

function agregarTareaDiaria(descripcion) {
    const tareas = leerTareasDiarias();

    // Verificamos si la tarea ya existe
    if (tareas.some(tarea => tarea.descripcion === descripcion)) {
        console.log(`La tarea "${descripcion}" ya está registrada.`);
        return;
    }

    tareas.push({ descripcion, estado: 'pendiente' });
    guardarTareasDiarias(tareas);
    console.log(`Tarea "${descripcion}" agregada con éxito.`);
}

function leerTareasDiarias() {
    if (!fs.existsSync('tareasDiarias.json')) {
        return [];
    }
    const data = fs.readFileSync('tareasDiarias.json', 'utf8');
    return JSON.parse(data);
}

function listarTareasDiarias() {
    const tareas = leerTareasDiarias();
    if (tareas.length === 0) {
        console.log("No hay tareas registradas.");
        return;
    }
    console.log("Tareas diarias:");
    tareas.forEach(tarea => console.log(`- ${tarea.descripcion} (${tarea.estado})`));
}

function marcarTareaCompletada(descripcion) {
    let tareas = leerTareasDiarias();
    const tarea = tareas.find(tarea => tarea.descripcion === descripcion);

    if (!tarea) {
        console.log(`La tarea "${descripcion}" no está registrada.`);
        return;
    }

    tarea.estado = 'completada';
    guardarTareasDiarias(tareas);
    console.log(`Tarea "${descripcion}" marcada como completada.`);
}

function guardarTareasDiarias(tareas) {
    fs.writeFileSync('tareasDiarias.json', JSON.stringify(tareas, null, 2), 'utf8');
}

// Ejemplos
agregarTareaDiaria('Hacer tarea JS');
agregarTareaDiaria('Leer un libro');    
listarTareasDiarias();
marcarTareaCompletada('Hacer tarea JS');
listarTareasDiarias();

