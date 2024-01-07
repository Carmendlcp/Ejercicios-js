const body= document.querySelector('body');

const div$$= document.createElement('div');
body.appendChild(div$$);
//console.log(div$$);

for (let i = 0; i < 6; i++) {
    let p = document.createElement('p')
    div$$.appendChild(p);
}