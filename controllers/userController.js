const { Thought, User } = require('../models');

module.exports = {
  async seeAllUsers(req, res) {
    try {
      const allUser = await User.find();
      res.status(200).json(allUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }, 
  async createNewUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
