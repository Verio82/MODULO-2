// Importamos el módulo 'fs' para trabajar con archivos
import fs from 'fs';

// Leemos el contenido del archivo data.json
const data = fs.readFileSync('data.json', 'utf-8');

// Convertimos la cadena en un objeto de JavaScript
const persona = JSON.parse(data);

// Modificamos el campo "age"
persona.age = 35; // Cambiá el valor por el que quieras

// Convertimos el objeto modificado de nuevo a JSON
const nuevoJSON = JSON.stringify(persona, null, 2); 
// el "null, 2" hace que quede bonito con sangrías

// Guardamos el contenido modificado en el mismo archivo
fs.writeFileSync('data.json', nuevoJSON);

console.log("Archivo actualizado con éxito ✅");