const {Schema, Model, Types} = require('mongoose');

const userSchema = new Schema ({
    username: {
      type: String,
      unique: true,
      require: true,
      trim: true
    }, email: {
      type: String,
      unique: true,
      require: true,
      match: [/^\S+@\S+\.\S+$/]
    }, thoughts: [
      {type: Schema.Types.ObjectId, ref: 'Thought'}
    ], friends: [
      {type: Schema.Types.ObjectId, ref: 'User'}
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User