const fs = require('fs');
const path = require('path');

// Ruta hacia el archivo JSON de películas
const filePath = path.join(__dirname, '../movies.json');

// Función que busca una película por título
function buscarPeliculaPorTitulo(titulo) {
    // Leemos el archivo JSON como texto
    const data = fs.readFileSync(filePath, 'utf8');

    // Lo convertimos a un arreglo de objetos (películas)
    const peliculas = JSON.parse(data);

    // Buscamos la película cuyo título coincida (ignorando mayúsculas/minúsculas)
    return peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
}

module.exports = { buscarPeliculaPorTitulo };