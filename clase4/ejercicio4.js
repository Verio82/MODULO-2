//asegúrate de que tu archivo perfil.json existe. Si no existe, crea uno nuevo con un perfil básico.

// Importamos el modulo fs
const fs = require('fs');
// Leemos el archivo perfil.json
fs.readFile('perfil.json', 'utf8', (err, data) => {
    if (err) {
        // Si ocurre un error mostramos en consola
        console.error('No se puede leer tu perfil:', err);
    } else {
        // Convertimos el contenido del archivo a un objeto JavaScript
        const perfil = JSON.parse(data);
        
        // Mostramos el perfil en la consola
        console.log('Aqui esta tu perfil: \n', perfil);
    }
});
