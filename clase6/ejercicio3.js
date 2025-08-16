//escribir un programa interactivo que permita al usuario ingresar dos números y calcule su suma. Este ejercicio te ayudará a practicar el uso del módulo readline para leer entradas del usuario en la consola.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Pedimos que ingrese el primer número
rl.question('Ingrese el primer número: ', (num1) => {
    //Pedimos que ingrese el segundo numero
    rl.question('Ingrese el segundo número: ', (num2) => {
        //Convertimos los números ingresados a enteros
        const sum = parseInt(num1) + parseInt(num2);
        
        //Mostramos el resultado de la suma
        console.log(`La suma de ${num1} y ${num2} es: ${sum}`);
        
        //Cerramos la interfaz readline
        rl.close();
    });
});

//Finaliza el programa con un mensaje de agradecimiento

rl.on('close', () => {
    console.log('Gracias por usar el programa de suma. ¡Hasta luego!');
    process.exit(0);
});
