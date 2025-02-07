/* 

Ejercicio 4: Encontrar cursos en común

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Crea un programa que recorra ambos arreglos y, si hay cursos en común, imprima esos cursos en la consola. 

*/
 
let cursosEstudiante1 = ['Matematicas', 'Ingles', 'Programacion'];
let cursosEstudiante2 = ['Geografia', 'Español', 'Programacion'];

function encontrarCursosComunes(cursos1, cursos2) {
    let comunes = cursos1.filter(curso => cursos2.includes(curso));
    console.log("Cursos en comun:", comunes);
}