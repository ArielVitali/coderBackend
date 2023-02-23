const mongooose = require("mongoose");

const userCollection = "user";

const userSchema = new mongooose.Schema({
  name: String,
  lastname: String,
  isActive: { type: Boolean, default: true },
});

const User = mongooose.model(userCollection, userSchema);

module.exports = User;
