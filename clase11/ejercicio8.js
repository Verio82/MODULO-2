// Importamos readline-sync para leer lo que escribe el usuario
import readlineSync from "readline-sync";

// Arrays predefinidos de sujetos, verbos y complementos
const sujetos = ["El perro", "Mi abuela", "Un programador", "La profesora", "Un dragón"];
const verbos = ["come", "escribe", "lanza", "construye", "rompe"];
const complementos = ["una pizza", "un libro", "una pelota", "un castillo", "la computadora"];

// Función para obtener un elemento aleatorio de un array
function elegirAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

console.log("📝 Generador de Frases Aleatorias");

// Preguntamos cuántas frases quiere el usuario
const cantidad = parseInt(readlineSync.question("👉 ¿Cuántas frases deseas generar? "));

// Verificamos que el número sea válido
if (isNaN(cantidad) || cantidad <= 0) {
    console.log("⚠️ Por favor, escribe un número válido mayor que 0.");
} else {
    console.log("\n📜 Aquí tienes tus frases:");
    for (let i = 0; i < cantidad; i++) {
        const frase = `${elegirAleatorio(sujetos)} ${elegirAleatorio(verbos)} ${elegirAleatorio(complementos)}.`;
        console.log(`${i + 1}. ${frase}`);
    }
}