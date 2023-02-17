const userController = require("../users/controller.users");

const router = (app) => {
  app.use("/users", userController);
};

module.exports = router;
