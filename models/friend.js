const mongoose  = require('mongoose');

const friendSchema = new mongoose.Schema({
  user: { type: String },
  name: { type: String },
  contact: {
    email: { type: String },
    phone: { type: Number }
  },
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
  sign: {
    asc: {type: String },
    sun: {type: String },
    moon: {type: String },
    mercury: {type: String },
    venus: {type: String }
  },
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
    {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
    // locationSchema
  ]
});

module.exports = {
  FriendModel: mongoose.model('Friend', friendSchema)
};
