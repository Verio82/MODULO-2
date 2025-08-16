//Crea un programa interactivo que pregunte al usuario su nombre y lo use en un mensaje de despedida. Usa variables de entorno para personalizar el saludo inicial. 

// Importamos dotenv para leer variables de entorno.
require('dotenv').config();

// Importamos readline para la interacción.
const readline = require('readline');

//Usa una variable de entorno llamada START_MESSAGE para configurar el saludo inicial.

const START_MESSAGE = process.env.START_MESSAGE || 'Hola, bienvenido!';

// Mostramos el saludo inicial.
console.log(startMessage);

//Usa readline para preguntar el nombre del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('¿Cuál es tu nombre? ', (name) => {
    // Usamos el nombre del usuario en un mensaje de despedida.
    console.log(`Gracias por participar, ${name}! ¡Hasta luego!`);
    
    // Cerramos la interfaz readline.
    rl.close();
});

//Manejamos el cierre de la interfaz readline
rl.on('close', () => {
    process.exit(0);
});
