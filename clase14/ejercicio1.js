//Escribe un script en Node.js que use el módulo crypto para generar un hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en la consola.

const crypto = require('crypto');

const readlineSync = require('readline-sync');

const texto = readlineSync.question('Ingrese un texto: ');

const hash = crypto.createHash('sha256').update(texto).digest('hex');

console.log('Mensaje: ', hash);


