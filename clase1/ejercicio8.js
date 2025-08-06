//Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena. Usa un bucle for y condicionales. Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

function contarLetra(cadena, letra) {
    let contador = 0; // Inicializamos un contador para las apariciones de la letra

    for (let i = 0; i < cadena.length; i++) { // Recorremos cada carácter de la cadena
        if (cadena[i].toLowerCase() === letra.toLowerCase()) { // Comparamos sin distinguir mayúsculas y minúsculas
            contador++; // Incrementamos el contador si encontramos la letra
        }
    }
    return contador; // Devolvemos el número total de veces que aparece la letra
}

let texto = "Hola Mundo"; // Cadena de texto de ejemplo
let letra = "o"; // Letra a buscar
console.log(contarLetra(texto, letra)); // Llamamos a la función y mostramos el resultado
