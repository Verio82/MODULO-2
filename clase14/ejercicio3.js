//Crea un script en Node.js que permita al usuario ingresar un texto, luego lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar elresultado original. Usa el módulo crypto para el cifrado y descifrado.

const crypto = require('crypto');

const readline = require('readline-sync');

const texto = readline.question('Ingrese un texto: ');

const algoritmo = 'aes-256-cbc';

const key = crypto.randomBytes(32);

const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algoritmo, key, iv);

let cifrado = cipher.update(texto, 'utf-8', 'hex');

cifrado += cipher.final('hex');

console.log('Texto cifrado: ', cifrado);

//Empieza descifrado
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

let descifrado = decipher.update(cifrado, 'hex', 'utf-8');
descifrado += decipher.final('utf-8');

console.log('Texto descifrado: ', descifrado);


