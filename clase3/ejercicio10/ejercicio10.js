//Crea un programa que registre las compras realizadas. El programa debe permitirte: 1. Agregar una compra: Registrar una compra con su nombre y precio. 2. Listar las compras: Mostrar todas las compras registradas. 3. Eliminar una compra: Eliminar una compra de la lista. 

const fs = require('fs');

function agregarCompra(nombre, precio) {
    const compras = leerCompras();

    // Verificamos si la compra ya existe
    if (compras.some(compra => compra.nombre === nombre)) {
        console.log(`La compra "${nombre}" ya está registrada.`);
        return;
    }

    compras.push({ nombre, precio });
    guardarCompras(compras);
    console.log(`Compra "${nombre}" agregada con éxito.`);
}

function leerCompras() {
    if (!fs.existsSync('compras.json')) {
        return [];
    }
    const data = fs.readFileSync('compras.json', 'utf8');
    return JSON.parse(data);
}

function listarCompras() {
    const compras = leerCompras();
    if (compras.length === 0) {
        console.log("No hay compras registradas.");
        return;
    }
    console.log("Compras registradas:");
    compras.forEach(compra => console.log(`- ${compra.nombre} ($${compra.precio})`));
}

function eliminarCompra(nombre) {
    let compras = leerCompras();
    const compraIndex = compras.findIndex(compra => compra.nombre === nombre);

    if (compraIndex === -1) {
        console.log(`La compra "${nombre}" no está registrada.`);
        return;
    }

    compras.splice(compraIndex, 1);
    guardarCompras(compras);
    console.log(`Compra "${nombre}" eliminada con éxito.`);
}

function guardarCompras(compras) {
    fs.writeFileSync('compras.json', JSON.stringify(compras, null, 2), 'utf8');
}

// Ejemplos
agregarCompra('Leche', 1.50);
agregarCompra('Pan', 0.80);
listarCompras();
eliminarCompra('Leche');
listarCompras();
