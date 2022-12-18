const objetos = [
  {
    code: 1,
  },
  {
    code: 1,
  },
  {
    code: 2,
  },
];

const hola = objetos.map((objetos) => Object.values(objetos));

const incluye = Object.values(hola);
console.log(hola);
