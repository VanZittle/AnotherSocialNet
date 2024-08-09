const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref:'thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref:'user'
    }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
