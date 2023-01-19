const ProductManager = require("../clase3/entregable");
const express = require("express");
const port = 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));

const prodManager = new ProductManager();
prodManager.addProduct("ARROZ", "Arroz integral", 12, "./", 23234, 1);
prodManager.addProduct("ARBEJAS", "Arbejas integrales", 12, "./", 24342, 1);

const getItems = (array, n) => {
  const length = array.length;
  if (!n) {
    return array;
  } else {
    const itemsToReturn = Math.min(n, length);
    return array.slice(0, itemsToReturn);
  }
};

app.get("/", (req, res) => {
  res.send(`<h1> Entrega 4 </h1>`);
});

app.get("/products", (req, res) => {
  let { limit } = req.query;
  const products = getItems(prodManager.getProducts(), limit);
  res.json({ products });
});

app.get("/products/:id", (req, res) => {
  let { id } = req.params;
  const product = prodManager.getProductById(parseInt(id));
  if (!product) {
    res.json({ error: "not found" });
  } else {
    res.json({ product });
  }
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
