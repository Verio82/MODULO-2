// Crea un programa para registrar eventos. El programa debe permitirte: 1. Agregar un evento: Registrar un evento con nombre, fecha y lugar. 2. Listar los eventos: Mostrar todos los eventos registrados. 3. Eliminar un evento: Eliminar un evento de la lista. 

const fs = require('fs');

function agregarEvento(nombre, fecha, lugar) {
    const eventos = leerEventos();

    // Verificamos si el evento ya existe
    if (eventos.some(evento => evento.nombre === nombre)) {
        console.log(`El evento "${nombre}" ya está registrado.`);
        return;
    }

    eventos.push({ nombre, fecha, lugar });
    guardarEventos(eventos);
    console.log(`Evento "${nombre}" agregado con éxito.`);
}

function leerEventos() {
    if (!fs.existsSync('eventos.json')) {
        return [];
    }
    const data = fs.readFileSync('eventos.json', 'utf8');
    return JSON.parse(data);
}

function listarEventos() {
    const eventos = leerEventos();
    if (eventos.length === 0) {
        console.log("No hay eventos registrados.");
        return;
    }
    console.log("Eventos registrados:");
    eventos.forEach(evento => console.log(`- ${evento.nombre} | Fecha: ${evento.fecha} | Lugar: ${evento.lugar}`));
}

function eliminarEvento(nombre) {
    let eventos = leerEventos();
    const eventoIndex = eventos.findIndex(evento => evento.nombre === nombre);

    if (eventoIndex === -1) {
        console.log(`El evento "${nombre}" no está registrado.`);
        return;
    }

    eventos.splice(eventoIndex, 1);
    guardarEventos(eventos);
    console.log(`Evento "${nombre}" eliminado con éxito.`);
}

function guardarEventos(eventos) {
    fs.writeFileSync('eventos.json', JSON.stringify(eventos, null, 2), 'utf8');
}

// Ejemplos
agregarEvento('Concierto de Rock', '2023-12-01', 'Estadio Nacional');
agregarEvento('Feria de Tecnología', '2023-11-15', 'Centro de Convenciones');
listarEventos();
eliminarEvento('Concierto de Rock');
listarEventos();
