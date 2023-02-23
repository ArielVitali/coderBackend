const { Router } = require("express");
const UserDao = require("../class/User.dao");
const User = new UserDao();

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await User.find();

    const users = response.map(({ name, lastname }) => ({
      name,
      lastname,
    }));

    console.log(__dirname);
    console.log(__filename);
    console.log(process.cwd());

    res.json({ message: { users } });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, lastname } = req.body;

    const newUser = {
      name,
      lastname,
    };

    const response = await User.create(newUser);

    res.json({ message: response });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/", async (req, res) => {
  const response = User.deleteMany();
  res.json({ message: response });
});

module.exports = router;
