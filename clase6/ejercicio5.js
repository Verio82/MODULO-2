//Crea un programa interactivo que permita convertir temperaturas de grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso del módulo readline para manejar entradas del usuario y aplicar cálculos básicos. Además, incluye un mensaje personalizado de bienvenida configurado a través de variables de entorno. 

require('dotenv').config();

const readline = require('readline');

//Usa una variable de entorno llamada WELCOME_MESSAGE para configurar el mensaje de bienvenida.
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE || 'Bienvenido al conversor de temperaturas!';

console.log(WELCOME_MESSAGE);

//Usa el módulo readline para solicitar al usuario una temperatura en grados Celsius.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingrese la temperatura en grados Celsius: ', (celsius) => {
    //Convierte la temperatura a Fahrenheit usando la fórmula: F = C * 9/5 + 32
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;

    //Muestra el resultado de la conversión al usuario.
    console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);

    //Cierra la interfaz readline.
    rl.close();
});

//Nos despedimos del usuario con un mensaje de agradecimiento.
rl.on('close', () => {
    console.log('Gracias por usar el conversor de temperaturas. ¡Hasta luego!');
    process.exit(0);
}); 



