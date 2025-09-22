const { obtenerTareas, guardarTareas } = require('../models/tareaModel');
const { mostrarMenu, mostrarTareas, pedirTarea, pedirNumero } = require('../views/tareaView');

// Esta función es la que maneja toda la aplicación
const iniciarApp = () => {
    let salir = false; // Bandera para cortar el bucle cuando el usuario quiera salir

    while (!salir) {
        const opcion = mostrarMenu(); // Mostrar el menú y leer la opción
        const tareas = obtenerTareas(); // Leer las tareas guardadas

        switch(opcion) {
            case '1': // Ver tareas
                mostrarTareas(tareas);
                break;

            case '2': // Añadir tarea
                const nuevaTarea = pedirTarea();
                tareas.push(nuevaTarea);       // Agregamos la nueva tarea al array
                guardarTareas(tareas);         // Guardamos en el archivo JSON
                console.log('Tarea añadida ✅');
                break;

            case '3': // Eliminar tarea
                mostrarTareas(tareas);         // Primero mostramos las tareas
                const num = pedirNumero();     // Pedimos qué número borrar
                if (num > 0 && num <= tareas.length) {
                    tareas.splice(num - 1, 1); // Eliminamos la tarea seleccionada
                    guardarTareas(tareas);     // Guardamos los cambios
                    console.log('Tarea eliminada ✅');
                } else {
                    console.log('Número inválido');
                }
                break;

            case '4': // Salir
                salir = true;
                console.log('Saliendo...');
                break;

            default: // Si el usuario pone algo incorrecto
                console.log('Opción no válida');
        }
    }
};

module.exports = { iniciarApp };