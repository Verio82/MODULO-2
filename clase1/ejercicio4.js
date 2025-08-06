//Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene. Usa un bucle for y condicionales. Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

function contarVocales(cadena) {
    let contador = 0; // Inicializamos un contador para las vocales

    for (let i = 0; i < cadena.length; i++) { // Recorremos cada carácter de la cadena
        let letra = cadena[i].toLowerCase(); // Convertimos la letra a minúscula para comparar
        if ('aeiou'.includes(letra)) { // Verificamos si la letra es una vocal
            contador++; // Incrementamos el contador si es una vocal
        }
    }
    return contador; // Devolvemos el número total de vocales encontradas
}
let texto = "Hola Miercoles"; // Cadena de texto de ejemplo
console.log(contarVocales(texto)); // Llamamos a la función y mostram