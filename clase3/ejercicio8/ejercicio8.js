// Crea un programa para gestionar proyectos. El programa debe permitirte: 1. Agregar un proyecto: Registrar un proyecto con su nombre y estado (pendiente o en progreso). 2. Listar los proyectos: Mostrar todos los proyectos registrados. 3. Actualizar el estado de un proyecto: Cambiar el estado de un proyecto a "finalizado" o "en progreso". 

const fs = require('fs');

function agregarProyecto(nombre, estado = 'pendiente') {
    const proyectos = leerProyectos();

    // Verificamos si el proyecto ya existe
    if (proyectos.some(proyecto => proyecto.nombre === nombre)) {
        console.log(`El proyecto "${nombre}" ya está registrado.`);
        return;
    }

    proyectos.push({ nombre, estado });
    guardarProyectos(proyectos);
    console.log(`Proyecto "${nombre}" agregado con éxito.`);
}

function leerProyectos() {
    if (!fs.existsSync('proyectos.json')) {
        return [];
    }
    const data = fs.readFileSync('proyectos.json', 'utf8');
    return JSON.parse(data);
}

function listarProyectos() {
    const proyectos = leerProyectos();
    if (proyectos.length === 0) {
        console.log("No hay proyectos registrados.");
        return;
    }
    console.log("Proyectos registrados:");
    proyectos.forEach(proyecto => console.log(`- ${proyecto.nombre} (${proyecto.estado})`));
}

function actualizarEstadoProyecto(nombre, nuevoEstado) {
    const proyectos = leerProyectos();
    const proyecto = proyectos.find(proyecto => proyecto.nombre === nombre);

    if (!proyecto) {
        console.log(`El proyecto "${nombre}" no está registrado.`);
        return;
    }

    if (nuevoEstado !== 'pendiente' && nuevoEstado !== 'en progreso' && nuevoEstado !== 'finalizado') {
        console.log(`Estado "${nuevoEstado}" no válido. Debe ser "pendiente", "en progreso" o "finalizado".`);
        return;
    }

    proyecto.estado = nuevoEstado;
    guardarProyectos(proyectos);
    console.log(`Estado del proyecto "${nombre}" actualizado a "${nuevoEstado}".`);
}

function guardarProyectos(proyectos) {
    fs.writeFileSync('proyectos.json', JSON.stringify(proyectos, null, 2), 'utf8');
}

// Ejemplos
agregarProyecto('Desarrollo Web');
agregarProyecto('Aplicación Móvil', 'en progreso');
listarProyectos();  
actualizarEstadoProyecto('Desarrollo Web', 'finalizado');
listarProyectos();
