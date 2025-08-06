//Escribe una función que reciba un nombre completo y devuelva las iniciales en mayúsculas. Usa el método split() para dividir el nombre. Usa un bucle for y métodos de string. 

function obtenerIniciales(nombreCompleto) {
    let partes = nombreCompleto.split(' '); // Dividimos el nombre completo en partes usando el espacio como separador
    let iniciales = ''; // Inicializamos una cadena para almacenar las iniciales

    for (let i = 0; i < partes.length; i++) { // Recorremos cada parte del nombre
        iniciales += partes[i][0].toUpperCase(); // Agregamos la primera letra de cada parte en mayúscula a las iniciales
    }
    
    return iniciales; // Devolvemos las iniciales formadas
}
let nombre = "Juan Carlos Pérez"; // Nombre completo de ejemplo
console.log(obtenerIniciales(nombre)); // Llamamos a la función y mostramos las iniciales
