// Importamos módulos necesarios
const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Carpeta donde vamos a guardar las notas
const carpetaNotas = path.join(__dirname, 'notas');

// Si la carpeta no existe, la creamos
if (!fs.existsSync(carpetaNotas)) {
  fs.mkdirSync(carpetaNotas);
}

// ===== FUNCIONES =====

// Crear una nueva nota
function crearNota(nombre, contenido) {
  const rutaNota = path.join(carpetaNotas, `${nombre}.txt`);
  fs.writeFileSync(rutaNota, contenido, 'utf-8');
  console.log(`✅ Nota "${nombre}" creada con éxito.`);
}

// Leer una nota
function leerNota(nombre) {
  const rutaNota = path.join(carpetaNotas, `${nombre}.txt`);
  if (fs.existsSync(rutaNota)) {
    const contenido = fs.readFileSync(rutaNota, 'utf-8');
    console.log(`\n📖 Contenido de "${nombre}":\n${contenido}`);
  } else {
    console.log(`❌ La nota "${nombre}" no existe.`);
  }
}

// Eliminar una nota
function eliminarNota(nombre) {
  const rutaNota = path.join(carpetaNotas, `${nombre}.txt`);
  if (fs.existsSync(rutaNota)) {
    fs.unlinkSync(rutaNota);
    console.log(`🗑️ Nota "${nombre}" eliminada con éxito.`);
  } else {
    console.log(`❌ La nota "${nombre}" no existe.`);
  }
}

// Listar todas las notas
function listarNotas() {
  const archivos = fs.readdirSync(carpetaNotas);
  if (archivos.length === 0) {
    console.log('📂 No hay notas guardadas.');
  } else {
    console.log('\n=== 📋 Lista de Notas ===');
    archivos.forEach((archivo) => {
      console.log('- ' + path.basename(archivo, '.txt'));
    });
  }
}

// ===== MENÚ INTERACTIVO =====
let salir = false;

while (!salir) {
  console.log('\n=== 📝 Aplicación de Notas ===');
  console.log('1. Crear nota');
  console.log('2. Leer nota');
  console.log('3. Eliminar nota');
  console.log('4. Listar notas');
  console.log('5. Salir');

  const opcion = readline.question('Elige una opción: ');

  switch (opcion) {
    case '1':
      const nombre = readline.question('Nombre de la nota: ');
      const contenido = readline.question('Contenido: ');
      crearNota(nombre, contenido);
      break;

    case '2':
      const nombreLeer = readline.question('Nombre de la nota a leer: ');
      leerNota(nombreLeer);
      break;

    case '3':
      const nombreEliminar = readline.question('Nombre de la nota a eliminar: ');
      eliminarNota(nombreEliminar);
      break;

    case '4':
      listarNotas();
      break;

    case '5':
      salir = true;
      console.log('👋 Saliendo de la aplicación...');
      break;

    default:
      console.log('❌ Opción no válida.');
  }
}
