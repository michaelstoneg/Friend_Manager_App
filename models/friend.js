const mongoose  = require('mongoose');

const friendSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String },
  name: { type: String },
  dob: {type: Date },
  gender: { type: String },
  orientation: {type: String },
  likes: [{ type: String }],
  dislikes: [{ type: String }],
  hobbies: [{
    name: {type: String },
    type: {type: String }
  }],
  interests: [{
    name: {type: String },
    type: {type: String }
  }],
  sign: [{
    asc: {type: String },
    sun: {type: String },
    moon: {type: String },
    merc: {type: String },
    venus: {type: String }
  }],
  allies: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
    // friendSchema
  ],
  enemies: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
    // friendSchema
  ],
  events: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Event'}
    // eventSchema
  ],
  locations: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
    // locationSchema
  ]
});

module.exports = mongoose.model('Friend', friendSchema);
