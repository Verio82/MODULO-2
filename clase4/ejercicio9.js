//Modifica las metas para que sean objetos con un atributo estado. Usa el método filter para obtener las completas. Filtra las metas que ya completaste y muéstralas en la consola.

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
        //Modificamos las metas para que sean objetos con un atributo estado
        const metasConEstado = metas.map(meta => {      
            return {
                nombre: meta,
                estado: 'completa' // Asignamos un estado por defecto
            };
        });
                
        // Filtramos las metas que ya están completas
        const metasCompletas = metasConEstado.filter(meta => meta.estado === 'completa');
        
        // Mostramos las metas completas en la consola
        console.log('Metas completas:', metasCompletas);
    }
});
