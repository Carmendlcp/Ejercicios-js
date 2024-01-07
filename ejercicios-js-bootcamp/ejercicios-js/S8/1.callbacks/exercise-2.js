const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    const result = callback(description)
    userAnwsers.push(result);
}

// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');

father("Hola", confirmExample);
father("Adiós", promptExample);

console.log(userAnwsers);
