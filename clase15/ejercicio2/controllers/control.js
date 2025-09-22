const readline = require('readline-sync');

const { cargarTareas, agregarTarea, eliminarTareas } = require('./models/tareaModel')

const { menu, mostrarTareas, mostrarMensaje } = require('../views/tareaview');

const iniciar = () => {
    let opcion = -1;

    while(opcion!==0) {
        menu()
        opcion = readline.questionInt('Elige una opcion');

        switch(opcion) {
            case 1 : 
             const tareas = cargarTareas();
             mostrarTareas(tareas);
             break;

            case 2 :
                const nombre = readline.question('Agregue la nueva tarea: ');
                agregarTarea(nombre);
                mostrarMensaje('Tarea agregada.');
                break;
            case 3 :
                const ID = readline.questionInt('Ingrese el ID de la tarea a eliminar: ');
                eliminarTareas(ID);
                mostrarMensaje('Tarea eliminada.');
                break;
            case 4 :
                console.log('Conexion cerrada');
                break;

            default :
                console.log('Opcion invalida');
                   
                        
    };
}};

module.exports = iniciar;