//Escribe una función que reciba un array de números y devuelva un nuevo array sin números repetidos. Usa el objeto Set para eliminar duplicados. Convierte el Set a un array usando el operador spread (...)

function eliminarDuplicados(numeros) {
    return [...new Set(numeros)]; // Usamos Set para eliminar duplicados y convertimos a array con el operador spread
}
let numeros = [1, 2, 2, 3, 4, 4, 5]; // Array de números con duplicados
console.log(eliminarDuplicados(numeros)); // Llamamos a la función y mostramos el array sin duplicados
