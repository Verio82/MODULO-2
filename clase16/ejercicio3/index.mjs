import readline from 'readline-sync';
import { registrarUsuario, loginUsuario } from './auth.mjs';

let salir = false;

while (!salir) {
  console.log('\n=== Sistema de Autenticación ===');
  console.log('1. Registrar usuario');
  console.log('2. Iniciar sesión');
  console.log('3. Salir');

  const opcion = readline.question('Elige una opción: ');

  switch (opcion) {
    case '1':
      const nombre = readline.question('Nombre de usuario: ');
      const password = readline.question('Contraseña: ', { hideEchoBack: true });
      const resultadoRegistro = registrarUsuario(nombre, password);
      console.log(resultadoRegistro.mensaje);
      break;

    case '2':
      const nombreLogin = readline.question('Nombre de usuario: ');
      const passwordLogin = readline.question('Contraseña: ', { hideEchoBack: true });
      const resultadoLogin = loginUsuario(nombreLogin, passwordLogin);
      console.log(resultadoLogin.mensaje);
      break;

    case '3':
      salir = true;
      console.log('Saliendo...');
      break;

    default:
      console.log('Opción no válida');
  }
}