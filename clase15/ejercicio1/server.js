import net from 'net';
import  {v4 as idv4} from 'uuid';

const PORT = 4000;

const server = net.createServer((socket) => {
    const id = idv4();
    console.log('Cliente conectado: uuid asignado ', id );
    
    socket.write(`Tu ID es: ${id}`);

    

    socket.on('end', () => {
        console.log('Cliente desconectado.');
        
    });
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ', PORT );
    
});
