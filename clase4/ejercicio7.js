//Revisa tu lista de metas en el archivo metas.json. Busca si una meta específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala. 

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
        
        // Verificamos si la meta "Viajar a Japón" ya está en la lista
        if (!metas.includes('Viajar a Japón')) {
            // Si no está, la agregamos
            metas.push('Viajar a Japón');
            
            // Escribimos el objeto actualizado de vuelta al archivo metas.json
            fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
                if (err) {
                    console.error('No se pudo guardar las metas actualizadas:', err);
                } else {
                    console.log('Meta "Viajar a Japón" agregada con éxito:', metas);
                }
            });
        } else {
            console.log('La meta "Viajar a Japón" ya está en la lista.');
        }
    }
}
);
