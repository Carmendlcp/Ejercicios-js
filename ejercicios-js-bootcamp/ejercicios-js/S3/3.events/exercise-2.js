const body$$= document.querySelector('body');

const añadirEvento= document.querySelector('input');

//console.log(añadirEvento);

function hacemosFuncion(ev) {
  console.log(ev.target.value);
}

añadirEvento.addEventListener('focus', hacemosFuncion)





