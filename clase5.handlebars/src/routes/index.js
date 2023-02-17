const foodController = require("../foods/controller.foods");

const router = (app) => {
  app.use("/foods", foodController);
};

module.exports = router;
