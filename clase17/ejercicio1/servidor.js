const net = require("net");
const { procesarComando } = require("./controladores/tareaControlador");

const server = net.createServer((socket) => {
  console.log("📡 Cliente conectado.");

  socket.write("👋 Bienvenido al gestor de tareas.\n");
  socket.write("Comandos disponibles:\n- agregar <titulo>\n- listar\n");

  socket.on("data", (data) => {
    const comando = data.toString().trim();
    const respuesta = procesarComando(comando);
    socket.write(respuesta + "\n");
  });

  socket.on("end", () => {
    console.log("❌ Cliente desconectado.");
  });
});

server.listen(3000, () => {
  console.log("🚀 Servidor escuchando en el puerto 3000.");
});