const usersController = require("../users/usersController");
const productsController = require("../products/productsController");

const router = (app) => {
  app.use("/users", usersController);
  app.use("/products", productsController);
};

module.exports = router;
