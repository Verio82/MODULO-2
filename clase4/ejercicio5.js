//Es momento de eliminar tu archivo perfil.json. Verifica que el archivo existe antes de intentar borrarlo. 

// Importamos el modulo fs
const fs = require('fs');
// Verificamos si el archivo perfil.json existe
fs.access('perfil.json', fs.constants.F_OK, (err) => {
    if (err) {
        // Si el archivo no existe, mostramos un mensaje
        console.error('El archivo perfil.json no existe.');
    } else {
        // Si el archivo existe, lo eliminamos
        fs.unlink('perfil.json', (err) => {
            if (err) {
                console.error('No se pudo eliminar el archivo perfil.json:', err);
            } else {
                console.log('Archivo perfil.json eliminado con éxito.');
            }
        });
    }
}
);
