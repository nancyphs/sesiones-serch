/* 

Ejercicio 5: Manipulación de arrays

Para cada uno de los siguientes ejercicios, asume que estás comenzando con el siguiente arreglo de personas:

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Escribe un comando que imprima todas las personas en la lista.
Escribe el comando para eliminar a "Dani" del arreglo.
Escribe el comando para eliminar a "Juan" del arreglo.
Escribe el comando para mover "Luis" al inicio del arreglo.
Escribe el comando para agregar tu nombre al final del arreglo.
Usando un bucle, recorre este arreglo y después de imprimir "Maria", sal del bucle. (usar break)
Escribe el comando que devuelva el indexOf donde se encuentra "Maria".
Al final del ejercicio, deben quedar 4 personas en el arreglo. 

*/


function manipularArray() {
    let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    // 1. Imprimir la lista completa
    console.log("Lista original:", personas);

    // 2. Eliminar "Dani"
    personas = personas.filter(persona => persona !== "Dani");

    // 3. Eliminar "Juan"
    personas = personas.filter(persona => persona !== "Juan");

    // 4. Mover "Luis" al frente
    personas.unshift(personas.splice(personas.indexOf("Luis"), 1)[0]);

    // 5. Agregar mi nombre al final
    personas.push("Nancy");

    // 6. Iterar hasta imprimir "María" y luego salir
    for (let persona of personas) {
        console.log(persona);
        if (persona === "Maria") break;
    }

    // 7. Obtener el índice de "María"
    console.log("Índice de Maria:", personas.indexOf("Maria"));

    // Al final deben quedar 4 personas
    console.log("Lista final:", personas);
}