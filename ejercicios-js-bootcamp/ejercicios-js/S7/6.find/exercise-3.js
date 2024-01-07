const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];



const cucuAlien = aliens.find(alien => alien.name === 'Cucushumushu');

//console.log(cucuPorom);

if (cucuAlien) {
  const mutation = mutations.find(mutation => mutation.name === 'Porompompero');
  if (mutation) {
    cucuAlien.mutation = mutation;
  }
}

console.log(cucuAlien);
