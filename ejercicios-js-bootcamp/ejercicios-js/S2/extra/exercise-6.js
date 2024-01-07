function swap(array, indice1, indice2) {
  const intercambio = array[indice1];
  array[indice1] = array[indice2];
  array[indice2] = intercambio;

  return array;
}

const sugerenciaArray = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

swap(sugerenciaArray, 1, 3);
console.log(sugerenciaArray);
