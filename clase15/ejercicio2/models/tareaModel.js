const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'tareas.json');

if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]))
};

const cargarTareas = () => {
    const data = fs.readFileSync(FILE_PATH, 'utf8')
    return(JSON.parse(data));
};

const guardarTareas = (tareas) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tareas, null, 2));
};

const eliminarTareas = (ID) => {
     let tareas = cargarTareas()
     tareas = tareas.filter(tarea => tarea.ID!==ID)
     guardarTareas(tareas)
};

const agregarTarea = (nombre) => {
    tareas = cargarTareas()
    const nueva = {ID:Date.now(), nombre}
    tareas.push(nueva);
    guardarTareas(tareas)
    return(nueva)
};

module.exports = { cargarTareas, agregarTarea, eliminarTareas}