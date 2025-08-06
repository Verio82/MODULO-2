// Crea un archivo llamado metas.json con una lista vacía al principio. Luego, agrega metas como: “Aprender Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo. 

// Importamos el modulo fs
const fs = require('fs');
// Creamos un archivo metas.json con una lista vacía si no existe
fs.writeFile('metas.json', JSON.stringify([], null, 2), (err) => {
    if (err) {
        console.error('No se pudo crear el archivo metas.json:', err);
    } else {
        console.log('Archivo metas.json creado con éxito.');
        
        // Agregamos metas al archivo
        const nuevasMetas = ['Aprender Node.js', 'Viajar a Japón'];
        
        // Leemos el archivo existente
        fs.readFile('metas.json', 'utf8', (err, data) => {
            if (err) {
                console.error('No se puede leer el archivo metas.json:', err);
            } else {
                // Convertimos el contenido del archivo a un objeto JavaScript
                const metas = JSON.parse(data);
                
                // Agregamos las nuevas metas
                metas.push(...nuevasMetas);
                
                // Escribimos el objeto actualizado de vuelta al archivo metas.json
                fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
                    if (err) {
                        console.error('No se pudo guardar las metas actualizadas:', err);
                    } else {
                        console.log('Metas actualizadas con éxito:', metas);
                    }
                });
            }
        });
    }
});