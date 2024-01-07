function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i; // Devuelve la posición del array cuando se encuentra el valor igual al texto.
      }
    }
    return "No se ha encontrado el elemento"; 
  }


const asignaturas = ["matematicas", "lengua", "programacion", "ciencias"];
const resultado1 = findArrayIndex(asignaturas, "lengua");
console.log(resultado1); 

const colores = ["red", "green", "blue"];
const resultado2 = findArrayIndex(colores, "yellow");
console.log(resultado2); 

const compra = ["lechuga", "huevos", "pan", "leche", "gel"];
const resultado3 = findArrayIndex(compra, "gel");
console.log(resultado3);