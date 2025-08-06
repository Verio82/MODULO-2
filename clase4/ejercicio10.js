//Escribe un programa que copie el contenido de metas.json en un archivo llamado respaldo_metas.json. Usando el metodo fs.copyFile().

// Importamos el modulo fs
const fs = require('fs');

// Leemos el archivo metas.json
fs.copyFile('metas.json', 'respaldo_metas.json', (err) => {
    if (err) {
        // Si ocurre un error mostramos en consola
        console.error('No se pudo copiar el archivo metas.json:', err);
    } else {
        // Si la copia fue exitosa, mostramos un mensaje
        console.log('Archivo metas.json copiado a respaldo_metas.json con éxito.');
    }
});