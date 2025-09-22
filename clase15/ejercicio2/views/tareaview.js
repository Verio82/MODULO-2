const menu = () => {
    console.log('1. Mostrar tareas');
    console.log('2. Agregar tarea');
    console.log('3. Eliminar tarea');
    console.log('4. Salir');
    const opcion = readline.question('Elige una opcion: ');
    return(opcion);
};

const mostrarTareas = (tareas) => {
    console.log("Tareas: ")
    if (tareas.lenght === 0) {
        console.log('No hay tareas');
                
    } else {
        tareas.forEach(tarea => {
            console.log(`${tarea.ID}:${tarea.nombre}`);
            
        });
    }
}

const mostrarMensaje = (msg) => {
    console.log(`${msg}`);
    
}

module.exports = {menu, mostrarTareas}