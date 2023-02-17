const usersController = require("../users/controller.users");
const petsController = require("../pets/controller.pets");

const router = (app) => {
  app.use("/users", usersController);
  app.use("/pets", petsController);
};

module.exports = router;
