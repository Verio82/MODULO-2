
import net from 'net';

const cliente = net.createConnection({port: 4000}, () => {
    console.log('Conectado al servidor.');
    
});

cliente.on('data', (data) => {
    console.log('Mensaje recibido del servidor', data.toString());
    cliente.end();
});

