
const crypto = require('crypto');

const data = 'Este es un mensaje secreto';

//Creamos un objeto Hash usando el algoritmo 'sha256'
const hash = crypto.createHash('sha256');

//Actualizamos el hash con lods datos
hash.update(data);

//Obtenemos el hsh en formato hexadecimal
const hashOutput = hash.digest('hex');

//Mostrar el hash generado

console.log('Hash SMA-256: ', hashOutput);
