//Crea una función que reciba una cadena de texto y devuelva otra cadena con las palabras en orden inverso. Usa el método split() para separar las palabras. Usa el método reverse() para invertir el array. Usa el método join() para unir las palabras en una nueva cadena. 

function invertirPalabras(cadena) {
    let palabras = cadena.split(' '); // Dividimos la cadena en palabras usando el espacio como separador
    palabras.reverse(); // Invertimos el array de palabras
    return palabras.join(' '); // Unimos las palabras en una nueva cadena con espacios
}
let texto = "Hola mundo desde JavaScript"; // Cadena de texto de ejemplo
console.log(invertirPalabras(texto)); // Llamamos a la función y mostramos el resultado
