
const crypto = require('crypto');

const data = 'Mensaje secreto';

const secretKey = 'mi_clave_secreta';

//Creamos un objeto HMAC
const hmac = crypto.createHmac('sha256', secretKey);

//Actualizar el HMAC con los datos
hmac.update(data);

//Obtener el HMAC en formato hexadecimal
const hmacOutput = hmac.digest('hex');

//Mostrar el HMAC generado
console.log('HMAC SHA-256: ', hmacOutput);
