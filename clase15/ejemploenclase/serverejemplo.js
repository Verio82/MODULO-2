//Importamos el modulo http
import http from 'http';
//Como vamos a trabajar con archivos importamos el modulo fs
import fs from 'fs';

const PORT = 3000;

const server = http.createServer((req, res) => {
    //Leemos el archivo datos.json
    fs.readFile('datos.json', 'utf8', (eer, data) => {
        if (err) {
            //Si hay error
            res.end('No se pudo leer el archivo JSON');
            return;
        }

        //Enviamos el contenido del archivo JSON al navegador
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT}');
    
});