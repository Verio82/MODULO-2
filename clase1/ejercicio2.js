//Escribe una función que reciba un objeto con platos y precios, y devuelva los platos cuyo precio sea menor a $20. Usa un bucle for...in. Usa objetos y arrays.

function platosBaratos(menu) {
    let platos = []; // Inicializamos un array para almacenar los platos baratos

    for (let plato in menu) { // Recorremos el objeto de menú
        if (menu[plato] < 20) { // Verificamos si el precio del plato es menor a $20
            platos.push(plato); // Agregamos el nombre del plato al array si cumple la condición
        }
    }
    return platos; // Devolvemos el array de platos baratos
}
let menu = { // Objeto con platos y sus precios
    "Ensalada": 15, 
    "Hamburguesa": 25,
    "Pasta": 18,
    "Sopa": 12,
    "Pizza": 22
};
console.log(platosBaratos(menu)); // Llamamos a la función y mostramos los platos
