const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const añadoVisitado = cities.map((city) => {
    if (city.isVisited){
        return '(Visitado)' + city.name;
    }else {
        return city.name;
    }
}
);
console.log(añadoVisitado);