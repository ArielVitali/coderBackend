const express = require("express");
const router = require("../src/routes/router");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

router(app);

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:admin@coderbackencluster.peozmtb.mongodb.net/?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log(`Error connecting to database => ` + error);
    }
    console.log("Database connected");
  }
);

module.exports = app;
