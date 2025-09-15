// Importamos readline-sync para leer lo que escribe el usuario
import readlineSync from "readline-sync";

// Definimos la tasa de conversión (1 dólar = 0.85 euros)
const tasaConversion = 0.85;

console.log("💱 Conversor de Monedas: Dólares a Euros");

// Pedimos al usuario la cantidad de dólares
const dolares = parseFloat(readlineSync.question("👉 Ingresa la cantidad en dólares: "));

// Verificamos que el usuario haya ingresado un número válido
if (isNaN(dolares) || dolares < 0) {
    console.log("⚠️ Por favor, ingresa un número válido mayor o igual a 0.");
} else {
    // Hacemos la conversión
    const euros = dolares * tasaConversion;

    // Mostramos el resultado con 2 decimales
    console.log(`💵 ${dolares} dólares = 💶 ${euros.toFixed(2)} euros`);
}