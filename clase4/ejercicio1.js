//Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es: 1. Crear un archivo llamado perfil.json.  2. Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita. 3. Usa el módulo fs para escribir este archivo desde Node.js. 

//Importamos el modulo fs
const fs = require('fs');

//Creamos un objeto que representa el perfil de una persona
const perfil = {
    nombre: "Maria",
    edad: 29,
    ciudadFavorita: "Paris"
    };

fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
    if (err) {
        //Si ocurre un error mostramos en consola
        console.error('Hubo un error al crear tu perfil:', err);
    } else {
        //Mensaje de exito
        console.log('Perfil creado con exito! Revisa el archivo perfil.json');
    }
}
);
