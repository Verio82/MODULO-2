// Importamos los módulos necesarios
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Ruta del archivo donde se guardarán los mensajes cifrados
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Si el archivo no existe, lo creamos con un array vacío
if (!fs.existsSync(rutaMensajes)) {
  fs.writeFileSync(rutaMensajes, JSON.stringify([]));
}

// ====== CONFIGURACIÓN DEL CIFRADO ======
const algoritmo = 'aes-256-ctr'; // Algoritmo de cifrado
const clave = crypto.randomBytes(32); // Clave de 32 bytes
const iv = crypto.randomBytes(16); // Vector de inicialización de 16 bytes

// Función para cifrar un mensaje
function cifrar(mensaje) {
  const cipher = crypto.createCipheriv(algoritmo, clave, iv);
  const mensajeCifrado = Buffer.concat([cipher.update(mensaje, 'utf8'), cipher.final()]);
  return mensajeCifrado.toString('hex'); // Guardamos en formato hexadecimal
}

// Función para descifrar un mensaje
function descifrar(mensajeCifrado) {
  const decipher = crypto.createDecipheriv(algoritmo, clave, iv);
  const mensajeDescifrado = Buffer.concat([
    decipher.update(Buffer.from(mensajeCifrado, 'hex')),
    decipher.final(),
  ]);
  return mensajeDescifrado.toString('utf8');
}

// ====== FUNCIONES PARA GESTIONAR MENSAJES ======

// Guardar un mensaje cifrado en el JSON
function guardarMensaje(mensajeCifrado) {
  const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8'));
  mensajes.push({ fecha: new Date().toISOString(), mensaje: mensajeCifrado });
  fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));
}

// Mostrar todos los mensajes cifrados
function mostrarMensajes() {
  const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8'));
  if (mensajes.length === 0) {
    console.log('📂 No hay mensajes almacenados.');
  } else {
    console.log('\n=== 📋 Mensajes cifrados ===');
    mensajes.forEach((m, i) => {
      console.log(`${i + 1}. ${m.fecha} - ${m.mensaje}`);
    });
  }
}

// ====== MENÚ INTERACTIVO ======
let salir = false;

while (!salir) {
  console.log('\n=== 🔐 Aplicación de Cifrado ===');
  console.log('1. Cifrar mensaje');
  console.log('2. Ver mensajes cifrados');
  console.log('3. Descifrar un mensaje');
  console.log('4. Salir');

  const opcion = readline.question('Elige una opción: ');

  switch (opcion) {
    case '1':
      const mensaje = readline.question('Escribe el mensaje a cifrar: ');
      const mensajeCifrado = cifrar(mensaje);
      guardarMensaje(mensajeCifrado);
      console.log(`✅ Mensaje cifrado: ${mensajeCifrado}`);
      break;

    case '2':
      mostrarMensajes();
      break;

    case '3':
      const mensajeHex = readline.question('Escribe el mensaje cifrado en HEX: ');
      try {
        const mensajeDescifrado = descifrar(mensajeHex);
        console.log(`📖 Mensaje descifrado: ${mensajeDescifrado}`);
      } catch {
        console.log('❌ Error: no se pudo descifrar el mensaje.');
      }
      break;

    case '4':
      salir = true;
      console.log('👋 Saliendo de la aplicación...');
      break;

    default:
      console.log('❌ Opción no válida.');
  }
}