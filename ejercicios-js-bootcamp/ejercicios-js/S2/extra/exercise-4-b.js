function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; 
    }
  }
  return "No se ha encontrado el elemento";
}

function removeItem(array, text) {
  const removeSplice = findArrayIndex(array, text);

  if (removeSplice !== -1) {
    array.splice(removeSplice, 1);
  }
  return array;
}

const asignaturas = ["matematicas", "lengua", "programacion", "ciencias"];
removeItem(asignaturas, "lengua");
console.log(asignaturas);

const colores = ["red", "green", "blue"];
removeItem(colores, "red");
console.log(colores);

const compra = ["lechuga", "huevos", "pan", "leche", "gel"];
removeItem(compra, "pan");
console.log(compra);
