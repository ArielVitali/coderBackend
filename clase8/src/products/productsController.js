const { Router } = require("express");
const Product = require("../models/Product.model");
const FilesManager = require("../class/files.manager");
const productsManager = new FilesManager("Products.json");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const products = await productsManager.loadItems();

    await Product.insertMany(products);

    res.json({ message: "Productos cargados" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/", async (req, res) => {
  await Product.deleteMany();
  res.json({ message: "All products have been deleted" });
});

module.exports = router;
