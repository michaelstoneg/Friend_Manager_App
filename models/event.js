const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

const eventSchema = new mongoose.Schema({
  location: [
    location ids
  ],
  name: { type: String },
  type: { type: String },
  activities: [
      {
        name: { type: String },
        type: { type: String }
      }
  ],
  duration: { type: Number },
  start: { type: Number },
  rating: { type: Number, min: 0, max: 5 },
  attendance: { type: Number},
  friends: [
    friend ids
  ],
  description: { type: String },
  tags: [
    { type: String }
  ],
  substances: [
    {
      name: { type: String },
      amount: { type: Number }
    }
  ],
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
