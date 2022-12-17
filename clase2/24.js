const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const supermarket = objetos.map((objetos) => Object.keys(objetos));
console.log(supermarket);

const totalCantidad = objetos
  .map((objetos) => Object.values(objetos))
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalCantidad);
