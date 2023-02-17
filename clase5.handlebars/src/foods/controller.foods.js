const { Router } = require("express");

const router = Router();

const foods = [
  {
    name: "Pizza",
    price: 100,
  },
  {
    name: "Hamburguesa",
    price: 80,
  },
  {
    name: "Papas fritas",
    price: 50,
  },
];

router.get("/", (req, res) => {
  const user = {
    name: "John",
    lastname: "Doe",
    role: "admin",
  };

  const random = Math.round(Math.random() * (foods.length - 1));

  const product = foods[random];

  res.render("../views/index.handlebars", {
    user,
    foods,
    isAdmin: user.role === "admin",
    style: "index.css",
  });
});

module.exports = router;
