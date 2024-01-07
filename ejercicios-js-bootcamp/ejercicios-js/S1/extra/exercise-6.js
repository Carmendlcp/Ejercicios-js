const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

for (let i = 0; i < products.length; i++) {
  const movies = products[i];{
    if (products[i].sellCount > 20) {
      console.log("Soy una película con buenas ventas");
    }else (products[i].sellcount < 20) 
      console.log("Soy una película de pocas ventas");
    } 
  }