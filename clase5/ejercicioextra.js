// Configurar un servidor TCP que escuche en el puerto 5000.
//1. Crea un archivo llamado servidor.js. 2. Importa el módulo que te permite trabajar con servidores TCP (net). 3. Usa el método que crea un servidor. 

const net = require('net')

const PORT = 5000
let clientesConectados = 0; // Variable global para contar los clientes

const server = net.createServer((socket) => {
    clientesConectados++; // Incrementar al conectar
    console.log("Cliente conectado"); //Ejercicio 2 Mostrar en la consola cuando un cliente se conecta al servidor. 
    console.log(`Clientes conectados actualmente: ${clientesConectados}`);

    socket.on('data', (data) => {
        const mensaje = data.toString()
        console.log("Mensaje recibido del cliente: ", mensaje);
        //Enviar una respuesta al cliente después de recibir un mensaje. 
    const respuesta = "Hola cliente, mensaje recibido correctamente."    
    socket.write(respuesta)    
   
});

socket.on('end', () => {
    clientesConectados--; // Decrementar al desconectar
    console.log("El cliente se ha desconectado");
    console.log(`Clientes conectados actualmente: ${clientesConectados}`);
});

});

server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto ", PORT)
})

