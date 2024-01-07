const body$$ = document.querySelector("body");

const harryPotter = [];

const potterlist = async () => {
  const img$$ = document.createElement("img");
  img$$.src =
    "https://i.pinimg.com/originals/48/9e/7c/489e7c3e61e39e0be2b275d9b203cfd8.gif";
  img$$.classList.add("imgCarga");
  body$$.appendChild(img$$);
 
  for (let i = 1; i < 50; i++) {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters${i}`
    );
    const result = await response.json();
    harryPotter.push(result);
  }
  img$$.remove();
  return harryPotter;
  //Con esto consigo coger los pokemons de la api y que se vea en consola los arrays
};

/*const img$$ = document.createElement('img');
img$$.src = 'https://cdn.dribbble.com/users/1407587/screenshots/3014076/media/ef5ebb3df0fc3474f1a9e4f49c32ddf8.gif';
img$$.classList.add('imgCarga');
pokedexLista.appendChild(img$$);
img$$.remove();*/
