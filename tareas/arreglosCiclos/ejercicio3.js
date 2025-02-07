/* 

Ejercicio 3: Sumar y multiplicar los valores de un array

Escribe un programa que calcule la suma y el producto (multiplicación) de un arreglo de números.
Imprime la suma y el producto.

Ejemplo:
Dado el arreglo [1, 2, 3, 4], la salida debe ser:
La suma es 10. El producto es 24. 

*/

function sumaYProducto(numeros) {
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    let producto = numeros.reduce((acc, num) => acc * num, 1);
    console.log(`La suma es ${suma}. El producto es ${producto}.`);
}