const body$$= document.querySelector('body');

const hacerClick = document.querySelector('#btnToClick');

//console.log(hacerClick)

function quieroHacerEvento(ev) {
    console.log('Click:', ev);
}


hacerClick.addEventListener('click', quieroHacerEvento); 
