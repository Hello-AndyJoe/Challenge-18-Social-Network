const { Thought, User } = require('../models');

module.exports = {
  async seeAllThoughts(req, res) {
    try {
      const allThought = await Thought.find();
      res.status(200).json(allThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};