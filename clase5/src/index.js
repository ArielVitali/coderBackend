const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");

const port = 3000;

const app = express();

//siempre viene los middlewares primero
app.use(express.json()); //que un body se convierta en json
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

//aca le pasamos la responsabilidad de los endpoints a router
router(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
