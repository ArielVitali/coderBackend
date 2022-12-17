const persona = {
  name: "mateo",
  apellido: "Capo",
  edad: 10,
};

//console.log(persona);
//console.log(Object.keys(persona));
//console.log(Object.values(persona));
//console.log(Object.entries(persona));

const campeonesDelMundo = [
  {
    argentina: 3,
    brasil: 5,
  },
  {
    holanda: 2,
    usa: 2,
  },
  {
    francia: 0,
  },
];
const keys = Object.keys(campeonesDelMundo);
console.log(Object.keys(campeonesDelMundo));
console.log(Object.values(campeonesDelMundo));
