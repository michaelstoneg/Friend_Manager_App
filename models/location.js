const mongoose  = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String },
  area: { type: String },
  distance: { type: Number },
  address: { type: String },
  type: { type: String },
  price: { type: Number, min: 0, max: 5 },
  friends: [
    friend ids
  ],
  events: [
    event ids
  ],
  rating: { type: Number, min: 0, max: 5 },
  times: {
    opening: { type: Number },
    closing: { type: Number }
  },
  positives: [
    { type: String }
  ],
  negatives: [
    { type: String }
  ],
  wholiked: [
    friends ids
  ],
  whodisliked: [
    friend ids
  ]
});

module.exports = mongoose.model('Event', eventSchema);
