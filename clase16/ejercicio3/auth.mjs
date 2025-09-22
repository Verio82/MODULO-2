import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

// Ruta al archivo de usuarios
const rutaUsuarios = path.join(process.cwd(), 'usuarios.json');

// Leer usuarios del archivo
export const obtenerUsuarios = () => {
  if (!fs.existsSync(rutaUsuarios)) return [];
  const data = fs.readFileSync(rutaUsuarios, 'utf-8');
  return JSON.parse(data);
};

// Guardar usuarios en el archivo
export const guardarUsuarios = (usuarios) => {
  fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));
};

// Registrar un nuevo usuario
export const registrarUsuario = (nombre, password) => {
  const usuarios = obtenerUsuarios();

  // Verificar si el nombre ya existe
  const existe = usuarios.find((u) => u.nombre === nombre);
  if (existe) {
    return { exito: false, mensaje: 'El usuario ya existe' };
  }

  // Crear nuevo usuario con UUID
  const nuevoUsuario = {
    id: uuidv4(),
    nombre,
    password, // ⚠️ en producción usar hash, aquí lo guardamos plano para simplicidad
  };

  usuarios.push(nuevoUsuario);
  guardarUsuarios(usuarios);

  return { exito: true, mensaje: 'Usuario registrado con éxito ✅', usuario: nuevoUsuario };
};

// Validar login
export const loginUsuario = (nombre, password) => {
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find((u) => u.nombre === nombre && u.password === password);

  if (usuario) {
    return { exito: true, mensaje: `Bienvenido, ${usuario.nombre} ✅`, usuario };
  } else {
    return { exito: false, mensaje: 'Credenciales incorrectas ❌' };
  }
};
