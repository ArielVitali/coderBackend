const { Router } = require("express");
const uploader = require("../utils");

const router = Router();

const users = [];

router.get("/", (req, res) => {
  res.json({ users });
});

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file" });
  }

  const { name, country } = req.body;
  const user = {
    name,
    country,
    profile: req.file.path,
  };

  users.push(user);

  res.json({ message: "User created" });
});

module.exports = router;
