// Importamos readline-sync para leer lo que el usuario escribe
import readlineSync from "readline-sync";

// Generamos un número aleatorio entre 1 y 10
// Math.random() devuelve un número entre 0 y 1
// Lo multiplicamos por 10 → entre 0 y 9.999...
// Math.floor redondea hacia abajo → entre 0 y 9
// Le sumamos 1 → entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Creamos una variable para guardar el intento del usuario
let intento;
console.log("🎯 Bienvenido al juego: Adivina el Número (entre 1 y 10)");

// Repetimos hasta que el usuario adivine
do {
    // Pedimos un número al usuario
    intento = parseInt(readlineSync.question("👉 Ingresa tu número: "));

    // Si no ingresa un número válido
    if (isNaN(intento) || intento < 1 || intento > 10) {
        console.log("⚠️ Por favor, escribe un número entre 1 y 10.");
        continue; // saltamos al siguiente intento
    }

    // Damos pistas
    if (intento < numeroSecreto) {
        console.log("⬆️ El número secreto es mayor.");
    } else if (intento > numeroSecreto) {
        console.log("⬇️ El número secreto es menor.");
    } else {
        console.log("🎉 ¡Felicidades! Adivinaste el número secreto:", numeroSecreto);
    }

} while (intento !== numeroSecreto);