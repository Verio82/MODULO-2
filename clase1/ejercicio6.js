//Escribe una función que reciba un array de números y devuelva el promedio. Usa un bucle for para sumar los números. Divide la suma total entre la cantidad de elementos del array.

function calcularPromedio(numeros) {
    let suma = 0; // Inicializamos una variable para la suma de los números

    for (let i = 0; i < numeros.length; i++) { // Recorremos el array de números
        suma += numeros[i]; // Sumamos cada número al total
    }

    return suma / numeros.length; // Devolvemos el promedio dividiendo la suma entre la cantidad de elementos
}

let numeros = [10, 20, 30, 40, 50]; // Array de números de ejemplo
console.log(calcularPromedio(numeros)); // Llamamos a la función y mostramos el promedio
