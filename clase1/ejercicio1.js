//Ejercicio 1: ¿Quién puede entrar al parque? Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y menores de 60. Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque. Consigna: • Usa un bucle for y condicionales. • Usa un array como entrada de la función. • Devuelve el número de personas que cumplen con los requisitos.

function contarPersonasQuePuedenEntrar(edades) {
    let contador = 0; // Inicializamos un contador para las personas que pueden entrar

    for (let i = 0; i < edades.length; i++) { // Recorremos el array de edades
        if (edades[i] > 12 && edades[i] < 60) { // Verificamos si la edad está en el rango permitido
            contador++; // Incrementamos el contador si la persona puede entrar
        }
    }
    return contador; // Devolvemos el número total de personas que pueden entrar
}
let edades = [10, 15, 25, 30, 5, 60, 45, 12, 59]; // Array de edades de ejemplo
console.log(contarPersonasQuePuedenEntrar(edades)); // Llamamos a la función y mostramos el resultado
