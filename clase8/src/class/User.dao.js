const User = require("../models/User.model");

class UserDao {
  async find() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(userInfo) {
    try {
      const newUser = awaitUser.create(userInfo);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteMany() {
    try {
      await User.deleteMany();
      return "All users have been deleted";
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserDao;
