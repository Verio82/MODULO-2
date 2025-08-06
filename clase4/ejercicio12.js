//Crea un programa que maneje un archivo tareas.json con las siguientes funcionalidades: 1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y estado (pendiente o completa). 2. Completar una tarea: Cambia el estado de una tarea a completa. 3. Listar tareas por estado: Muestra las tareas agrupadas por su estado (pendiente o completa). 

// Importamos el modulo fs
const fs = require('fs');
// Creamos un archivo tareas.json con una lista vacía si no existe
fs.writeFile('tareas.json', JSON.stringify([], null, 2), (err) => {
    if (err) {
        console.error('No se pudo crear el archivo tareas.json:', err);
    } else {
        console.log('Archivo tareas.json creado con éxito.');
    }
});
// Función para agregar una tarea
function agregarTarea(nombre, descripcion) {
    fs.readFile('tareas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('No se puede leer el archivo tareas.json:', err);
        } else {
            const tareas = JSON.parse(data);
            // Agregamos la nueva tarea
            tareas.push({ nombre, descripcion, estado: 'pendiente' });
            // Escribimos el objeto actualizado de vuelta al archivo tareas.json
            fs.writeFile('tareas.json', JSON.stringify(tareas, null, 2), (err) => {
                if (err) {
                    console.error('No se pudo guardar la tarea:', err);
                } else {
                    console.log(`Tarea "${nombre}" agregada con éxito.`);
                }
            });
        }
    });
}
// Función para completar una tarea
function completarTarea(nombre) {
    fs.readFile('tareas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('No se puede leer el archivo tareas.json:', err);
        } else {
            const tareas = JSON.parse(data);
            const tarea = tareas.find(t => t.nombre === nombre);
            if (tarea) {
                tarea.estado = 'completa';
                // Escribimos el objeto actualizado de vuelta al archivo tareas.json
                fs.writeFile('tareas.json', JSON.stringify(tareas, null, 2), (err) => {
                    if (err) {
                        console.error('No se pudo actualizar la tarea:', err);
                    } else {
                        console.log(`Tarea "${nombre}" completada.`);
                    }
                });
            } else {
                console.log(`La tarea "${nombre}" no existe.`);
            }
        }
    });
}
// Función para listar tareas por estado
function listarTareasPorEstado(estado) {
    fs.readFile('tareas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('No se puede leer el archivo tareas.json:', err);
        } else {
            const tareas = JSON.parse(data);
            const tareasFiltradas = tareas.filter(t => t.estado === estado);
            console.log(`Tareas ${estado}:`, tareasFiltradas);
        }
    });
}
// Ejemplo de uso
agregarTarea('Aprender Node.js', 'Estudiar los conceptos básicos de Node.js');
agregarTarea('Completar proyecto', 'Finalizar el proyecto de Node.js'); 
completarTarea('Aprender Node.js');
listarTareasPorEstado('pendiente');
// Listar tareas completas
listarTareasPorEstado('completa');
