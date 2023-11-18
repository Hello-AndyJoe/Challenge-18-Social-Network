const { Thought, User } = require('../models');

module.exports = {
  async seeAllUsers(req, res) {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
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
  async seeOneUser(req, res) {
    try {
      const oneUser = await User.findOne({_id: req.params.userId}).select('-__v');
      
      if(!oneUser) {
        return res.status(404).json({message: 'User not found.'})
      }

      res.json(oneUser);
    } catch(err) {
      res.status(500).json(err);
    }
  },
  async updateOneUser(req, res) {
    try {
      const oneUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if(!oneUser) {
        return res.status(404).json({message: 'User not found'})
      }

      res.json(oneUser);
    } catch(err) {
      res.status(500).json(err);
    }
  },
  async deleteOneUser(req, res) {
    try {
      const oneUser = await User.findOneAndDelete({_id: req.params.userId});
      
      if(!oneUser) {
        return res.status(404).json({message: 'User not found.'})
      }

      res.json(oneUser);
    } catch(err) {
      res.status(500).json(err);
    }
  }
};
