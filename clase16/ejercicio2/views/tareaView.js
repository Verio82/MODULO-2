const readline = require('readline-sync');

// Muestra el menú principal
const mostrarMenu = () => {
    console.log('\n=== Lista de Tareas ===');
    console.log('1. Ver tareas');
    console.log('2. Añadir tarea');
    console.log('3. Eliminar tarea');
    console.log('4. Salir');
    const opcion = readline.question('Elige una opción: ');
    return opcion;
};

// Muestra todas las tareas
const mostrarTareas = (tareas) => {
    if (tareas.length === 0) {
        console.log('No hay tareas.');
        return;
    }
    console.log('\nTareas:');
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea}`);
    });
};

// Pide al usuario que escriba una nueva tarea
const pedirTarea = () => readline.question('Escribe la nueva tarea: ');

// Pide al usuario qué número de tarea quiere eliminar
const pedirNumero = () => parseInt(readline.question('Número de tarea a eliminar: '));

module.exports = { mostrarMenu, mostrarTareas, pedirTarea, pedirNumero };