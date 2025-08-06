// crea un objeto JSON que represente un libro. El objeto debe tener las siguientes propiedades: titulo, autor, año, genero (puede ser un array de géneros)

const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    genero: ["Realismo mágico", "Ficción"]
};
//Muestra en la consola el título y el autor del libro
console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
//Actualiza el año del libro a un valor más reciente
libro.año = 2021;
//Añade una nueva propiedad llamada páginas que indique el número de páginas del libro
libro.paginas = 417;
//Muestra el objeto actualizado en la consola
console.log(libro);
