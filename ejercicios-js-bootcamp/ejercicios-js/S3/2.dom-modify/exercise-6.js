const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const body$$ = document.querySelector('body');

const ul$$= document.createElement('ul')

for (let i = 0; i < apps.length; i++) {
    let li$$ = document.createElement('li')
    li$$.textContent = apps[i];
    ul$$.appendChild(li);

    }

   