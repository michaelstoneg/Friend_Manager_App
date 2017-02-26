const mongoose  = require('mongoose');

const eventSchema = new mongoose.Schema({
  location: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
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
    {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
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
    {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
  ],
  whodisliked: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
  ]
});

module.exports = {
  EventModel: mongoose.model('Event', eventSchema)
};
