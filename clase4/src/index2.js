const express = require("express");
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("hi al get");
});

const users = [
  { id: 1, nombre: "Ariel", ape: "dvml" },
  { id: 2, nombre: "Caco", ape: "cccc" },
];

app.get("/usuarios", (req, res) => {
  console.log(req.query);
  res.json({ users });
});

app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) res.json({ error: "not found" });
  res.json({ user });
});

app.get("/saludo", (req, res) => {
  res.json({ message: "Hi coders!" });
});

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style= 'color:blue'>Bienvenido</h1>`);
});

app.get("/usuario", (req, res) => {
  res.json({
    nombre: "caco",
    apellido: "vitali",
    edad: "19",
    correo: "caco@vitali.com",
  });
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
