const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

const eventSchema = new mongoose.Schema({
  title: { type: String },
  journalEntry: {
    entry: { type: String },
    timeStamp: { type: Date }
  }
});

module.exports = mongoose.model('Event', eventSchema);
