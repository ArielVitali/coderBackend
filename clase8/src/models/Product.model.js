const mongoose = require("mongoose");
const { schema } = require("./User.model");

const productCollection = "Product";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
});

const Product = mongoose.model(productCollection, productSchema);

module.exports = Product;
