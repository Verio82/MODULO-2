//Crea un script en Node.js que utilice readline-sync para solicitar al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, muestra el resultado de la operación seleccionada.

const readlineSync = require('readline-sync');

const numero1 = readlineSync.questionFloat('Ingrese el primer numero: ');

const numero2 = readlineSync.questionFloat('Ingrese el segundo numero: ');

const operación = readlineSync.question('Elige la operacion (+-*/)');

let resultado 

switch(operación) {
    case '+' : 
      resultado = numero1 + numero2;
      break;
    case '-' :
      resultado = numero1 - numero2;
      break;
    case '*' :
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    default :
        resultado = 'Operacion no valida';
                 
}

console.log('El resultado es: ', resultado);
