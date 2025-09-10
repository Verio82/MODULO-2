//Importamos el modulo Crypto
const crypto = require('crypto');
//Algoritmo de cifrado AES con un tamaño de 256 bits
const algoritmo = 'aes-256-cbc';
//Generamos una clave de 256 bits => 32 bytes
const key = crypto.randomBytes(32);
//Generamos un vector de inicializacion de 16 bytes
const iv = crypto.randomBytes(16);

//Creamos el objeto cypher
const cipher = crypto.createCipheriv(algoritmo, key, iv);

//Datos a autenticar
const data = 'Mensaje secreto';

//Ciframos los datos
let encriptado = cipher.update(data, 'utf8', 'hex');
//Finalizar cifrado
encriptado += cipher.final('hex');

//Imprimo el texto cifrado
console.log('Texto cifrado: ', encriptado);

//Si yo quiero descifrar el mensaje
//Creamos el objeto decipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

//Desciframods los datos
let descifrado = decipher.update(encriptado, 'hex', 'utf8');
descifrado += decipher.final('utf8');

console.log('Texto descifrado: ', descifrado);
