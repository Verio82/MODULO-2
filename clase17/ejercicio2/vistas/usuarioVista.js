// Formatea la lista de usuarios en una cadena legible

function formatearUsuarios(usuarios) {
  if (usuarios.length === 0) return 'No hay usuarios registrados.';
  
  let salida = 'Lista de usuarios:\n';
  usuarios.forEach((u, i) => {
    salida += `${i + 1}. ${u.nombre} (ID: ${u.id})\n`;
  });
  return salida;
}

module.exports = { formatearUsuarios }; // Exportamos la función