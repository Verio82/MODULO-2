// Configurar un servidor TCP que escuche en el puerto 5000.
//1. Crea un archivo llamado servidor.js. 2. Importa el módulo que te permite trabajar con servidores TCP (net). 3. Usa el método que crea un servidor. 

const net = require('net')

const PORT = 5000


const server = net.createServer((socket) => {
    console.log("Cliente conectado"); //Ejercicio 2 Mostrar en la consola cuando un cliente se conecta al servidor. 
    socket.on('data', (data) => {
        const mensaje = data.toString()
        console.log("Mensaje recibido del cliente: ", mensaje);
        //Enviar una respuesta al cliente después de recibir un mensaje. 
    const respuesta = "Hola cliente, mensaje recibido correctamente."    
    socket.write(respuesta)    
   
});


socket.on('end', () => {
    console.log("El cliente se ha desconectado");
});
});

server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto ", PORT)
});

