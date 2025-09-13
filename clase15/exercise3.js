// Definimos una cadena JSON que representa un libro
const libroJSON = '{"title": "Cien años de soledad", "author": "Gabriel García Márquez", "year": 1967}';

// Convertimos la cadena JSON a un objeto de JavaScript
const libro = JSON.parse(libroJSON);

// Mostramos cada propiedad en la consola
console.log("Título:", libro.title);
console.log("Autor:", libro.author);
console.log("Año:", libro.year);