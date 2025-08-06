//Importa el array desde estudiantes.js
const estudiantes = require('./estudiantes.js');
//Muestra en la consola los nombres de todos los estudiantes
estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}`);
});
//Calcula y muestra el promedio de notas de un estudiante específico
const calcularPromedioNotas = (notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
}
console.log(`Promedio de notas de ${estudiantes[0].nombre}: ${calcularPromedioNotas(estudiantes[0].notas)}`);

//Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON
const nuevoEstudiante = {
    nombre: "Carlos Fernández",
    edad: 23,
    curso: "Biología",
    notas: [9.0, 8.5, 9.5, 10.0]
};
estudiantes.push(nuevoEstudiante);
console.log(JSON.stringify(estudiantes, null, 2));
