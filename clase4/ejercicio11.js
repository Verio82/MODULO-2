//Imagina que estás desarrollando una miniaplicación para gestionar contactos. Tu objetivo es: 1. Crear un archivo llamado contactos.json que almacene una lista de contactos. 2. Implementar funciones para: o Agregar un contacto: Cada contacto debe tener nombre, teléfono y email. o Listar todos los contactos. o Buscar un contacto por nombre. 3. Asegúrate de que los contactos no se repitan (valida el nombre antes de agregarlo). 

// Importamos el modulo fs
const fs = require('fs');   
// Creamos un archivo contactos.json con una lista vacía si no existe
fs.writeFile('contactos.json', JSON.stringify([], null, 2), (err) => {
    if (err) {
        console.error('No se pudo crear el archivo contactos.json:', err);
    } else {
        console.log('Archivo contactos.json creado con éxito.');
        
    }
});

    // Función para agregar un contacto
        function agregarContacto(nombre, telefono, email) {
            fs.readFile('contactos.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('No se puede leer el archivo contactos.json:', err);
                } else {
                    const contactos = JSON.parse(data);
                    
                    // Verificamos si el contacto ya existe
                    if (contactos.some(contacto => contacto.nombre === nombre)) {
                        console.log(`El contacto ${nombre} ya existe.`);
                    } else {
                        // Agregamos el nuevo contacto
                        contactos.push({ nombre, telefono, email });
                        
                        // Escribimos el objeto actualizado de vuelta al archivo contactos.json
                        fs.writeFile('contactos.json', JSON.stringify(contactos, null, 2), (err) => {
                            if (err) {
                                console.error('No se pudo guardar el contacto:', err);
                            } else {
                                console.log(`Contacto ${nombre} agregado con éxito.`);
                            }
                        });
                    }
                }
            });
        }

        // Función para listar todos los contactos
        function listarContactos() {
            fs.readFile('contactos.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('No se puede leer el archivo contactos.json:', err);
                } else {
                    const contactos = JSON.parse(data);
                    console.log('Lista de contactos:', contactos);
                }
            });
        }

        // Función para buscar un contacto por nombre
        function buscarContacto(nombre) {
            fs.readFile('contactos.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('No se puede leer el archivo contactos.json:', err);
                } else {
                    const contactos = JSON.parse(data);
                    const contacto = contactos.find(c => c.nombre === nombre);
                    
                    if (contacto) {
                        console.log(`Contacto encontrado:`, contacto);
                    } else {
                        console.log(`Contacto ${nombre} no encontrado.`);
                    }
                }
            });
        };


        // Ejemplo de uso
        agregarContacto('Juan Perez', '1234567890', 'juan@email.com');
        agregarContacto('Maria Lopez', '0987654321', 'maria@email.com');
        listarContactos();
        buscarContacto('Juan Perez');
        buscarContacto('Carlos Garcia');
