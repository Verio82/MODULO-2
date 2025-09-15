// Importamos readline-sync para leer lo que escribe el usuario
import readlineSync from "readline-sync";

// Creamos un array vacío donde vamos a guardar los productos
const listaCompras = [];

console.log("🛒 Bienvenido a tu Lista de Compras");
console.log("Escribe los productos que quieras agregar.");
console.log("Cuando quieras terminar, escribe 'fin'.\n");

// Variable para guardar cada producto que escriba el usuario
let producto;

do {
    // Preguntamos al usuario qué producto quiere agregar
    producto = readlineSync.question("👉 Ingresa un producto (o escribe 'fin' para terminar): ");

    // Si escribe algo distinto de 'fin', lo agregamos a la lista
    if (producto.toLowerCase() !== "fin") {
        listaCompras.push(producto);
        console.log(`✅ '${producto}' agregado a la lista.`);
    }

} while (producto.toLowerCase() !== "fin");

// Mostramos la lista completa
console.log("\n📋 Tu lista de compras:");
listaCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});