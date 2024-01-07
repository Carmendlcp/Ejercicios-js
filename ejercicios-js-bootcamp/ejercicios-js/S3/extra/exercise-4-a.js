const body$$ = document.querySelector("body");

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let i = 0; i < countries.length; i++) {
    const countriesDiv = document.createElement('div');

    const titleh4 = document.createElement('h4');
    titleh4.textContent = countries[i].title;

    const imgElement = document.createElement('img');
    imgElement.src = countries[i].imgUrl;

    countriesDiv.appendChild(titleh4);
    countriesDiv.appendChild(imgElement);
  
    body$$.appendChild(countriesDiv);
  }