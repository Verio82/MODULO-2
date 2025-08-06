//Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor usando sort

function ordenarNumerosAscendente(numeros) {
    return numeros.sort((a, b) => a - b); // Usamos sort para ordenar el array de números de menor a mayor
}   

let numeros = [5, 3, 8, 1, 4]; // Array de números de ejemplo
console.log(ordenarNumerosAscendente(numeros)); // Llamamos a la función y mostramos el array ordenado

