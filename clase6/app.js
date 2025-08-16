//Usa el paquete dotenv para cargar las variables de entorno desde un archivo .env

require('dotenv').config();

const greeting = process.env.GREETING || 'Hola';

// Obtenemos el nombre del usuario desde los argumentos de línea de comandos.
// Si no hay argumentos, usamos "Invitado" como predeterminado.
const name = process.argv[2] || 'Invitado';

// Mostarmos el saludo personalizado y el nombre del usuario:
console.log(`${greeting}, ${name}!`);

//ejercicio 2
//escribirás un programa que muestre información útil sobre el entorno donde se está ejecutando el programa. Este ejercicio te ayudará a practicar los métodos del objeto process en Node.js. Debe mostrar la plataforma del sistema operativo (Linux, macOS o Windows). Debe mostrar el directorio actual desde donde se ejecuta el programa.

console.log(`Plataforma del sistema operativo: ${process.platform}`);
console.log(`Directorio actual: ${process.cwd()}`);
