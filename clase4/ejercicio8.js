//Escribe un programa que lea tu archivo metas.json y cuente cuántas metas tienes actualmente.

// Importamos el modulo fs
const fs = require('fs');
// Leemos el archivo metas.json
fs.readFile('metas.json', 'utf8', (err, data) => {
    if (err) {
        // Si ocurre un error mostramos en consola
        console.error('No se puede leer el archivo metas.json:', err);
    } else {
        // Convertimos el contenido del archivo a un objeto JavaScript
        const metas = JSON.parse(data);
        
        // Contamos cuántas metas hay
        const cantidadMetas = Array.isArray(metas) ? metas.length : 0;
        
        // Mostramos la cantidad de metas en la consola
        console.log(`Tienes ${cantidadMetas} metas actualmente.`);
    }
}
);
