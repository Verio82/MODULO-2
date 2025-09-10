//Crea un script en Node.js que utilice el módulo readline-sync para solicitar al usuario que ingrese su nombre y edad. Luego, muestra un mensaje de saludo personalizado que incluya el nombre y la edad del usuario.

const readlineSync = require('readline-sync');

const nombre = readlineSync.question('Ingresa tu nombre: ');

const edad = readlineSync.questionInt('Ingresa tu edad: ');

console.log(`Hola ${nombre} tu edad es ${edad} `);

