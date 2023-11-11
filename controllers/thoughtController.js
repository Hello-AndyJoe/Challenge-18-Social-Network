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
  async createNewThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.status(200).json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};