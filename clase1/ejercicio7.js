//Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado. Usa el método filter().Usa una función flecha para simplificar el código.

function filtrarPalabrasLargas(palabras, longitud) {
    return palabras.filter(palabra => palabra.length > longitud); // Usamos filter para devolver las palabras con más caracteres que el número dado
}
let palabras = ["manzana", "banana", "kiwi", "sandía", "cereza"]; // Array de palabras de ejemplo
console.log(filtrarPalabrasLargas(palabras, 5)); // Llamamos a la función y mostramos las palabras filtradas
