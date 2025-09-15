// Importamos readline-sync para leer las respuestas del usuario
import readlineSync from "readline-sync";

console.log("🎯 Bienvenido al Juego de Preguntas y Respuestas");

// Definimos un conjunto de preguntas y sus respuestas correctas
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuesta: "paris"
    },
    {
        pregunta: "¿Cuánto es 5 x 6?",
        respuesta: "30"
    },
    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        respuesta: "marte"
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuesta: "leonardo da vinci"
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        respuesta: "pacífico"
    }
];

// Variable para llevar el puntaje del jugador
let puntaje = 0;

// Recorremos todas las preguntas
preguntas.forEach((item, index) => {
    console.log(`\nPregunta ${index + 1}: ${item.pregunta}`);
    const respuestaUsuario = readlineSync.question("👉 Tu respuesta: ");

    // Normalizamos a minúsculas para comparar sin errores
    if (respuestaUsuario.toLowerCase().trim() === item.respuesta) {
        console.log("✅ ¡Correcto!");
        puntaje++;
    } else {
        console.log(`❌ Incorrecto. La respuesta correcta es: ${item.respuesta}`);
    }
});

// Mostramos el resultado final
console.log(`\n🏆 Juego terminado. Obtuviste ${puntaje} de ${preguntas.length} respuestas correctas.`);