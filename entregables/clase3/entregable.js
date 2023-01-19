const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.id = 0;
    this.filePath = "./archivo_persistencia";
    this.readProductsFromFile();
  }

  readProductsFromFile() {
    try {
      const data = fs.readFileSync(this.filePath);
      this.products = JSON.parse(data);
      this.idCounter = this.products.length + 1;
    } catch (err) {
      console.error(err);
    }
  }

  saveProductsToFile() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.products));
    } catch (err) {
      console.error(err);
    }
  }

  addProduct(
    title = `Default Prduct ${1 + this.id}`,
    description = "Pre-setted description",
    price = 10 + this.id,
    thumbnail = "main/entregableParte1",
    code = 99 + this.id,
    stock = 0
  ) {
    try {
      const codes = this.products.map((codeItem) => codeItem.code);

      if (!codes.includes(code)) {
        this.id++;
        const product = {
          id: this.id,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };

        this.products.push(product);
        this.saveProductsToFile();
        return `Product created with id: ${this.id}`;
      } else {
        return `The product ${title} has been already added`;
      }
    } catch {}
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    return product;
  }

  updateProduct(id, updatedProduct) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updatedProduct,
    };
    this.saveProductsToFile();
  }

  deleteProduct(id) {
    this.products = this.products.filter((p) => p.id !== id);
    this.saveProductsToFile();
  }
}

module.exports = ProductManager;

/*
const prodManager = new ProductManager();
console.log(
  prodManager.addProduct("ARROZ", "Arroz integral", 12, "./", 23234, 1),
  prodManager.addProduct("ARBEJAS", "Arbejas integrales", 12, "./", 24342, 1),
  prodManager.getProducts(),
  prodManager.updateProduct(1, { title: "PERRO" }),
  prodManager.getProducts(),
  prodManager.getProductById(2),
  prodManager.deleteProduct(2),
  prodManager.getProducts()
);

setTimeout(() => {
  fs.unlinkSync("./archivo_persistencia");
  // code to be executed after 10 seconds
}, 10000);

*/
