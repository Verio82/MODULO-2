//Escribe un programa interactivo que solicite varias palabras al usuario y las muestre en mayúsculas. El programa finalizará cuando el usuario escriba "salir". 

const readline = require('readline');

//Creamos la interfaz readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
});

// Configuramos un mensaje de solicitud con rl.setPrompt().
rl.setPrompt('Escribe una palabra (o "salir" para terminar): ');
rl.prompt();

// Usamos el evento 'line' para manejar cada entrada del usuario.
rl.on('line', (input) => {
    // Si el usuario escribe "salir", terminamos el programa.
    if (input.toLowerCase() === 'salir') {
        console.log('¡Gracias por participar! Adiós.');
        rl.close();
    } else {
        // Mostramos la palabra ingresada en mayúsculas.
        console.log(`Palabra en mayúsculas: ${input.toUpperCase()}`);
        rl.prompt(); // Mostramos el mensaje de solicitud nuevamente.
    }
});

// Manejamos el cierre del programa.
rl.on('close', () => {
    process.exit(0);
});
