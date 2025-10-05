// Formatea la lista de contraseñas (solo hashes) para mostrar al cliente

function formatearContraseñas(lista) {
  if (lista.length === 0) return 'No hay contraseñas registradas.';

  let salida = 'Lista de contraseñas (solo hashes):\n';
  lista.forEach((c, i) => {
    salida += `${i + 1}. Usuario: ${c.usuario}, Hash: ${c.hash}\n`;
  });
  return salida;
}

module.exports = { formatearContraseñas }; // Exporta la función para usarla en otros módulos