//Crea un programa para llevar el control de un inventario. El programa debe permitirte: 1. Agregar un producto: Registrar un producto con su nombre y cantidad disponible. 2. Listar los productos: Mostrar todos los productos registrados. 3. Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario.

const fs = require('fs');

function agregarProducto(nombre, cantidad) {
    const inventario = leerInventario();

    // Verificamos si el producto ya existe
    if (inventario.some(producto => producto.nombre === nombre)) {
        console.log(`El producto "${nombre}" ya está registrado.`);
        return;
    }

    inventario.push({ nombre, cantidad });
    guardarInventario(inventario);
    console.log(`Producto "${nombre}" agregado con éxito.`);
}

function leerInventario() {
    if (!fs.existsSync('inventario.json')) {
        return [];
    }
    const data = fs.readFileSync('inventario.json', 'utf8');
    return JSON.parse(data);
}

function listarProductos() {
    const inventario = leerInventario();
    if (inventario.length === 0) {
        console.log("No hay productos registrados.");
        return;
    }
    console.log("Productos en el inventario:");
    inventario.forEach(producto => console.log(`- ${producto.nombre} (${producto.cantidad} unidades)`));
}

function actualizarCantidad(nombre, nuevaCantidad) {
    const inventario = leerInventario();
    const producto = inventario.find(producto => producto.nombre === nombre);

    if (!producto) {
        console.log(`El producto "${nombre}" no está registrado.`);
        return;
    }

    producto.cantidad = nuevaCantidad;
    guardarInventario(inventario);
    console.log(`Cantidad del producto "${nombre}" actualizada a ${nuevaCantidad}.`);
}

function guardarInventario(inventario) {
    fs.writeFileSync('inventario.json', JSON.stringify(inventario, null, 2), 'utf8');
}

//Ejemplos
agregarProducto('Laptop', 10);
agregarProducto('Teléfono', 20);
listarProductos();
actualizarCantidad('Laptop', 15);
listarProductos();
