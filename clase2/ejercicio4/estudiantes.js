//Crea un array de objetos que represente una lista de estudiantes. Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números). Exporta este array usando module.exports.
const estudiantes = [
    {
        nombre: "Ana Pérez",
        edad: 20,
        curso: "Ingeniería de Sistemas",
        notas: [8.5, 9.0, 7.5, 10.0]
    },
    {
        nombre: "Luis Gómez",
        edad: 22,
        curso: "Arquitectura",
        notas: [9.5, 8.0, 9.0,
10.0]
    },
    {
        nombre: "María López",
        edad: 21,
        curso: "Diseño Gráfico",
        notas: [7.0, 8.5, 9.0, 8.0]
    }
];
module.exports = estudiantes; // Exporta el array para que pueda ser utilizado en otros archivos
