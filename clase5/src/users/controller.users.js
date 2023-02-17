const { Router } = require("express");

const router = Router();

const users = [];

router.get("/", (req, res) => {
  res.json({ users });
});

router.post("/", (req, res) => {
  const { name, lastName, country } = req.body;

  const user = {
    name,
    lastName,
    country,
  };
  users.push(user);

  res.json({ message: user });
});

module.exports = router;
