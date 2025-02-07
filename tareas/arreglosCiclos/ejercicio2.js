/* 

Ejercicio 2: Duplicar los valores de un array

Escribe una función que:

Reciba un arreglo de números.
Duplique el valor de cada número en el arreglo.
Imprima el nuevo arreglo actualizado.
Ejemplo:
Dado el arreglo [1, 2, 4, 5], la salida debe ser [2, 4, 8, 10]. 

*/

function duplicarArray(numeros) {
    let duplicados = numeros.map(num => num * 2);
    console.log("Array duplicado:", duplicados);
}