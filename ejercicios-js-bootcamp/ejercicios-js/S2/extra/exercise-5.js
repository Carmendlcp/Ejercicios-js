function rollDice(dado) {
    const resultado = Math.floor(Math.random() * dado) + 1;
    return resultado;
  }
  
  const resultadoTirada = rollDice(6); 
  console.log(resultadoTirada);
  
