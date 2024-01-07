const placesToTravel = [
  {id: 5, name: 'Japan'},
  {id: 11, name: 'Venecia'},
  {id: 23, name: 'Murcia'},
  {id: 40, name: 'Santander'},
  {id: 44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'}
];


const eliminoPlaces = [];
for (let i = 0; i < placesToTravel.length; i++) {
  const ciudad = placesToTravel[i].id;
  if (ciudad !== 11 && ciudad !== 40) {
    eliminoPlaces.push(placesToTravel[i]);
  }
}

console.log(eliminoPlaces);
