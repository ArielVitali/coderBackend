const express = require("express");
const router = require("./router/index");

const port = 3000;

const app = express();

app.use(express.json());

router(app);

app.listen(port, () => {
  console.log("Server on port 3000");
});
