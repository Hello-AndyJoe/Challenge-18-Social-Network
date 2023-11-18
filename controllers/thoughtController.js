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
  async seeOneThought(req, res) {
    try {
      const oneThought = await Thought.findOne({_id: req.params.thoughtId}).select('-__v');
      
      if(!oneThought) {
        return res.status(404).json({message: 'Thought not found.'})
      }

      res.json(oneThought);
    } catch(err) {
      res.status(500).json(err);
    }
  },
  async updateOneThought(req, res) {
    try {
      const oneThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if(!oneThought) {
        return res.status(404).json({message: 'Thought not found'})
      }

      res.json(oneThought);
    } catch(err) {
      res.status(500).json(err);
    }
  },
  async deleteOneThought(req, res) {
    try {
      const oneThought = await Thought.findOneAndDelete({_id: req.params.thoughtId});
      
      if(!oneThought) {
        return res.status(404).json({message: 'Thought not found.'})
      }

      res.json(oneThought);
    } catch(err) {
      res.status(500).json(err);
    }
  }
};