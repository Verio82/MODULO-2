// Formatea la lista de mensajes de chat en una cadena legible

function formatearMensajes(lista) {
  if (lista.length === 0) return 'No hay mensajes en el chat.';
  
  let salida = 'Lista de mensajes:\n';
  lista.forEach((m, i) => {
    salida += `${i + 1}. [ID: ${m.id}] ${m.usuario}: ${m.contenido}\n`;
  });
  return salida;
}

module.exports = { formatearMensajes }; // Exporta la función para usarla en otros módulos