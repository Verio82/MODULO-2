//Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte: 1. Agregar un contacto: Registrar un nuevo contacto. 2. Listar los contactos: Mostrar todos los contactos registrados. 3. Eliminar un contacto: Eliminar un contacto de la lista.

const fs = require('fs');

function agregarContacto(nombre, telefono, email) {
    const agenda = leerAgenda();

    //Verificamos si el contacto ya existe
    if (agenda.some(contacto => contacto.nombre === nombre)) {
        console.log(`El contacto "${nombre}" ya está registrado.`);
        return;
    }
    agenda.push({ nombre, telefono, email });
    guardarAgenda(agenda);
    console.log(`Contacto "${nombre}" agregado con éxito.`);

}

function leerAgenda() {
    if (!fs.existsSync('agenda.json')) {
        return [];
    }
    const data = fs.readFileSync('agenda.json', 'utf8');
    return JSON.parse(data);
}

function listarContactos() {
    const agenda = leerAgenda();
    if (agenda.length === 0) {
        console.log("No hay contactos registrados.");
        return;
    }
    console.log("Contactos registrados:");
    agenda.forEach(contacto => console.log(`- ${contacto.nombre} | Teléfono: ${contacto.telefono} | Email: ${contacto.email}`));
}

function eliminarContacto(nombre) {
    let agenda = leerAgenda();
    const contactoIndex = agenda.findIndex(contacto => contacto.nombre === nombre);

    if (contactoIndex === -1) {
        console.log(`El contacto "${nombre}" no está registrado.`);
        return;
    }

    agenda.splice(contactoIndex, 1);
    guardarAgenda(agenda);
    console.log(`Contacto "${nombre}" eliminado con éxito.`);
}

function guardarAgenda(agenda) {
    fs.writeFileSync('agenda.json', JSON.stringify(agenda, null, 2), 'utf8');
}

//Ejemplos
agregarContacto('Juan Perez', '123456789', 'juan@email.com');
agregarContacto('Maria Lopez', '987654321', 'maria@email.com');
listarContactos();
eliminarContacto('Juan Perez');
listarContactos();
