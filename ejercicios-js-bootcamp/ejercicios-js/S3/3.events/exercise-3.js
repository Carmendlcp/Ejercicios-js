const body$$ = document.querySelector('body');

const eventoInput= document.querySelector('input')

//console.log(eventoInput);

function funcionInput(ev) {
    console.log('input', ev);
}

eventoInput.addEventListener('input', funcionInput);