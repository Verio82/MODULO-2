//Crea un script en Node.js que permita al usuario ingresar una contraseña y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,genera un hash de la contraseña combinada con el "sal" usando elalgoritmo SHA-256. Muestra el hash generado.

const crypto = require('crypto');

const readline = require('readline-sync');

const password = readline.question('Ingrese la contraseña: ');

const sal = readline.question('Ingrese un valor de sal: ');

const hash = crypto.createHash('sha-256').update(password+sal).digest('hex');

console.log('El hash es: ', hash);

