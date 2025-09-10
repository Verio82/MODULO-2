//Crea un script en Node.js que permita al usuario ingresar una lista de úmeros separados por comas. Ordena los números de menor a mayor ymuestra la lista ordenada

const readline = require('readline-sync');

const numeros = readline.question('Ingrese numeros separados por coma: ');

const ordenar = numeros.split(',').map(numero => parseInt(numero.trim()));

const ordenados = ordenar.sort((n1, n2) => n1-n2); 

console.log('Lista ordenada: ', ordenados);
