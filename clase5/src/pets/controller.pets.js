const { Router } = require("express");

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.json({ pets });
});

router.post("/", (req, res) => {
  const { name, age, specie } = req.body;
  const newPet = { name, age, specie };
  pets.push(newPet);
  res.json({ message: `Pet ${name} created` });
});

module.exports = router;
