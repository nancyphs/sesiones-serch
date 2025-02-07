/* 

Ejercicio 6: Algoritmo de burbuja

Escribe una función que implemente el algoritmo de ordenamiento de burbuja.

Entrada:
[3, 6, 12, 5, 100, 1]

Salida esperada:
[1, 3, 5, 6, 12, 100]

*/

function ordenarBurbuja(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar valores
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log("Array ordenado:", ordenarBurbuja([3, 6, 12, 5, 100, 1]));