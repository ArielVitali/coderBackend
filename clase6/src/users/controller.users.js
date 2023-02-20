const { Router } = require("express");

const router = Router();

const title = "GJVGFMCF";

router.get("/", (req, res) => {
  res.render("users.handlebars", {});
});

module.exports = router;
