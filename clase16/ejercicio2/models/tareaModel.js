const fs = require('fs');
const path = require('path');

// Ruta del archivo donde vamos a guardar las tareas
const FILE_PATH = path.join(__dirname, '../tareas.json');

// Función para obtener todas las tareas del archivo JSON
const obtenerTareas = () => {
    // Si no existe el archivo, devolvemos un array vacío
    if (!fs.existsSync(FILE_PATH)) return [];
    // Leemos el archivo y convertimos el texto en un array
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
};

// Función para guardar tareas en el archivo JSON
const guardarTareas = (tareas) => {
    // Guardamos el array en el archivo en formato JSON bonito
    fs.writeFileSync(FILE_PATH, JSON.stringify(tareas, null, 2));
};

module.exports = { obtenerTareas, guardarTareas };