const { Schema, model } = require('mongoose');
const reactionsquema = require('./Reaction')

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to have a thought',
      minlength: 1,
      maxlenght: 280
    },
    createdAt:{
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      reactionsquema
    ]

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
