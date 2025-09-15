// Importamos readline-sync para leer lo que escribe el usuario
import readlineSync from "readline-sync";

console.log("🧮 Calculadora de IMC (Índice de Masa Corporal)");

// Pedimos el peso en kilogramos
const peso = parseFloat(readlineSync.question("👉 Ingresa tu peso en kg: "));

// Pedimos la altura en metros
const altura = parseFloat(readlineSync.question("👉 Ingresa tu altura en metros (ej: 1.70): "));

// Verificamos que los valores ingresados sean válidos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("⚠️ Por favor, ingresa valores válidos para peso y altura.");
} else {
    // Fórmula del IMC = peso / (altura * altura)
    const imc = peso / (altura * altura);

    console.log(`\n📊 Tu IMC es: ${imc.toFixed(2)}`);

    // Clasificación básica según la OMS
    if (imc < 18.5) {
        console.log("🔎 Clasificación: Bajo peso");
    } else if (imc < 24.9) {
        console.log("✅ Clasificación: Peso normal");
    } else if (imc < 29.9) {
        console.log("⚠️ Clasificación: Sobrepeso");
    } else {
        console.log("🚨 Clasificación: Obesidad");
    }
}