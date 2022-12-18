class ProductManager {
  #products;

  constructor() {
    this.#products = [];
    this.id = 0;
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
      const codes = this.#products.map((codeItem) => codeItem.code);

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

        this.#products.push(product);
        return `Product created with id: ${this.id}`;
      } else {
        return `The product ${title} has been already added`;
      }
    } catch {}
  }

  getProducts() {
    return this.#products;
  }

  getProductById(id) {
    const product = this.#products.filter((product) => product.id === id);
    if (product.length == 0) {
      return `Producto ${id} not found`;
    } else {
      console.log(`Product ${id} found`);
      return product;
    }
  }
}

const prodManager = new ProductManager();

console.log(
  prodManager.addProduct("vfkmklfd", "vlfevl", 12, "/dlkvmf/", 23234, 1)
);
console.log(
  prodManager.addProduct("vfkmklfd", "vlfevl", 12, "/dlkvmf/", 23234, 1)
);
console.log(prodManager.getProducts());
console.log(prodManager.addProduct());
console.log(prodManager.addProduct());
console.log(prodManager.getProducts());
console.log(prodManager.getProductById(4));
