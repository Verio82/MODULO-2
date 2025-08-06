//Crea un programa que te permita gestionar un diario personal. El programa debe permitirte: 1. Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto. 2. Listar las entradas: Mostrar todas las entradas registradas. 3. Eliminar una entrada: Eliminar una entrada específica por su ID.

const fs = require('fs');

function agregarEntrada(fecha, texto) {
    const diario = leerDiario();

    // Verificamos si la entrada ya existe
    if (diario.some(entrada => entrada.fecha === fecha && entrada.texto === texto)) {
        console.log(`La entrada del ${fecha} ya está registrada.`);
        return;
    }

    const nuevaEntrada = { id: diario.length + 1, fecha, texto };
    diario.push(nuevaEntrada);
    guardarDiario(diario);
    console.log(`Entrada del ${fecha} agregada con éxito.`);
}

function leerDiario() {
    if (!fs.existsSync('diario.json')) {
        return [];
    }
    const data = fs.readFileSync('diario.json', 'utf8');
    return JSON.parse(data);
}

function listarEntradas() {
    const diario = leerDiario();
    if (diario.length === 0) {
        console.log("No hay entradas registradas.");
        return;
    }
    console.log("Entradas del diario:");
    diario.forEach(entrada => console.log(`ID: ${entrada.id} | Fecha: ${entrada.fecha} | Texto: ${entrada.texto}`));
}

function eliminarEntrada(id) {
    let diario = leerDiario();
    const entradaIndex = diario.findIndex(entrada => entrada.id === id);

    if (entradaIndex === -1) {
        console.log(`La entrada con ID ${id} no está registrada.`);
        return;
    }

    diario.splice(entradaIndex, 1);
    guardarDiario(diario);
    console.log(`Entrada con ID ${id} eliminada con éxito.`);
}

function guardarDiario(diario) {
    fs.writeFileSync('diario.json', JSON.stringify(diario, null, 2), 'utf8');
}

// Ejemplos
agregarEntrada('2023-10-01', 'Hoy fue un buen día.');   
agregarEntrada('2023-10-02', 'Aprendí algo nuevo sobre JavaScript.');
listarEntradas();
eliminarEntrada(1);
