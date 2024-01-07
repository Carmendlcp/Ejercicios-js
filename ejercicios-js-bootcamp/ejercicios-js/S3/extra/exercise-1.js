const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const enlazo = document.querySelectorAll('body')

//console.log(enlazo);
//tendré que crear la lista con ul
// CREO - MODIFICO - HAGO

const ul = document.createElement('ul');
document.body.appendChild(ul)

//hago la función, cada elemento de la const countries para asignarlo a cada elemento de la lista li(que tambien lo tengo que crear).
//uso el textContent y luego que sepa que los "li" son hijos de "ul"

for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
    console.log(ul);
  }