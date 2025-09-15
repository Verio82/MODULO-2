// Importamos los módulos necesarios
// readline-sync: para leer lo que el usuario escribe por consola
// crypto: para generar el hash del texto
import readlineSync from "readline-sync";
import crypto from "crypto";

// Creamos una variable para guardar la opción elegida por el usuario
let opcion;

do {
    // Mostramos el menú en pantalla
    console.log("\n=== MENÚ INTERACTIVO ===");
    console.log("1. Ver mensaje de bienvenida");
    console.log("2. Generar hash de un texto");
    console.log("3. Salir");

    // Pedimos al usuario que elija una opción
    opcion = readlineSync.question("Elige una opción: ");

    // Revisamos qué opción eligió el usuario
    switch (opcion) {
        case "1":
            // Si elige 1 → mostramos un saludo
            console.log("\n👋 ¡Bienvenido/a al programa de ejemplo con Node.js!");
            break;
        case "2":
            // Si elige 2 → pedimos un texto y generamos un hash
            const texto = readlineSync.question("Escribe el texto para generar su hash: ");
            const hash = crypto.createHash("sha256").update(texto).digest("hex");
            console.log("🔐 Hash SHA256 generado:", hash);
            break;
        case "3":
            // Si elige 3 → despedida y salimos del programa
            console.log("👋 Saliendo del programa... Hasta luego!");
            break;
        default:
            // Si escribe cualquier otra cosa → error
            console.log("⚠️ Opción no válida. Intenta de nuevo.");
    }

// Repetimos el menú mientras la opción no sea 3
} while (opcion !== "3");