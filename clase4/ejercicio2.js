//Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste en el ejercicio anterior y muestra la información en la consola para asegurarte de que todo está correcto. 

//Importamos el modulo fs
const fs = require('fs');

//Leemos el archivo perfil.json
fs.readFile('perfil.json', 'utf8', (err, data) => {
    if (err) {
        //Si ocurre un error mostramos en consola
        console.error('No se puede leer tu perfil:', err);
    } else {
        //Convertimos el contenido del archivo a un objeto JavaScript
        const perfil = JSON.parse(data);
        console.log('Aqui esta tu perfil: \n', perfil);
    }
});
    


