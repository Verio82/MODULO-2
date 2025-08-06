// Agrega un nuevo atributo hobby a tu perfil y guarda los cambios en el archivo perfil.json. Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo. 

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
        
        // Agregamos un nuevo atributo hobby
        perfil.hobby = 'Leer libros de ciencia ficción';
        
        // Escribimos el objeto actualizado de vuelta al archivo perfil.json
        fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
            if (err) {
                console.error('No se pudo guardar el perfil actualizado:', err);
            } else {
                console.log('Perfil actualizado con éxito:', perfil);
            }
        });
    }
});
