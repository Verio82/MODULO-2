// Definimos un objeto en JavaScript que representa a una persona
const persona = {
  nombre: "Ana Pérez",
  edad: 30,
  email: "ana.perez@example.com"
};

// Convertimos el objeto en una cadena JSON
const personaJSON = JSON.stringify(persona);

// Mostramos el JSON en la consola
console.log(personaJSON);