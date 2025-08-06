//.Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: nombre, edad, curso, notas (un array de números)
const estudiante = {
    nombre: "Ana Pérez",
    edad: 20,
    curso: "Ingeniería de Sistemas",
    notas: [8.5, 9.0, 7.5, 10.0]
};
//Convierte este objeto a una cadena JSON usando JSON.stringify()
const estudianteJSON = JSON.stringify(estudiante);
//Muestra la cadena JSON en la consola
console.log(estudianteJSON);
//Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() y muestra el objeto en la consola
const estudianteObjeto = JSON.parse(estudianteJSON);
console.log(estudianteObjeto);
