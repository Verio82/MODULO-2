//Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones: 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre. 2. Listar los libros: muestra todos los libros registrados. Usa un archivo JSON para guardar los libros. Si el archivo no existe, comienza con un arreglo vacío. 

//Agregar un libro
const fs = require('fs');
function agregarLibro(nombre) {
    const libros = leerLibros();

    //Verificamos si el libro ya existe
    if (libros.some(libro => libro.nombre === nombre)) {
        console.log(`El libro "${nombre}" ya está en la lista.`);
        return;
    }

    libros.push({ nombre });
    guardarLibros(libros);
    console.log(`Libro "${nombre}" agregado con éxito.`);
}

//Leer los libros desde el archivo JSON
function leerLibros() {
    if (!fs.existsSync('libros.json')) {
        return [];
    }
    const data = fs.readFileSync('libros.json', 'utf8');
    return JSON.parse(data);
}   

//Listar los libros
function listarLibros() {
    const libros = leerLibros();
    if (libros.length === 0) {
        console.log("No hay libros registrados.");
        return;
    }
    console.log("Libros favoritos:");
    libros.forEach(libro => console.log(`- ${libro.nombre}`));
}

//Guardar los libros en el archivo JSON
function guardarLibros(libros) {
    fs.writeFileSync('libros.json', JSON.stringify(libros, null, 2), 'utf8');
}

agregarLibro('El Principito');
agregarLibro('1984');
listarLibros();