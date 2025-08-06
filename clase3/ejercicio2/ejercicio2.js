//Crea un programa que permita: 1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas. 2. Listar las series: Muestra todas las series registradas. 3. Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.

const fs = require('fs');

function agregarSerie(nombre, temporadas) {
    const series = leerSeries();

    // Verificamos si la serie ya existe
    if (series.some(serie => serie.nombre === nombre)) {
        console.log(`La serie "${nombre}" ya está registrada.`);
        return;
    }

    series.push({ nombre, temporadas });
    guardarSeries(series);
    console.log(`Serie "${nombre}" agregada con éxito.`);
}

function leerSeries() {
    if (!fs.existsSync('series.json')) {
        return [];
    }
    const data = fs.readFileSync('series.json', 'utf8');
    return JSON.parse(data);
}

function listarSeries() {
    const series = leerSeries();
    if (series.length === 0) {
        console.log("No hay series registradas.");
        return;
    }
    console.log("Series registradas:");
    series.forEach(serie => console.log(`- ${serie.nombre} (${serie.temporadas} temporadas)`));
}   

function actualizarTemporadas(nombre, nuevasTemporadas) {
    const series = leerSeries();
    const serie = series.find(serie => serie.nombre === nombre);

    if (!serie) {
        console.log(`La serie "${nombre}" no está registrada.`);
        return;
    }

    serie.temporadas = nuevasTemporadas;
    guardarSeries(series);
    console.log(`Temporadas de la serie "${nombre}" actualizadas a ${nuevasTemporadas}.`);
}
function guardarSeries(series) {
    fs.writeFileSync('series.json', JSON.stringify(series, null, 2), 'utf8');
}

// Ejemplo de uso
agregarSerie('Stranger Things', 4);
agregarSerie('Breaking Bad', 5);
listarSeries();
actualizarTemporadas('Stranger Things', 5);
listarSeries();
