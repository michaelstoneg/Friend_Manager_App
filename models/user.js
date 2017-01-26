const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');

const journalSchema = new mongoose.Schema({
  title: { type: String },
  journalEntry: {
    entry: { type: String },
    timeStamp: { type: Date }
  }
});


const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String },
  gender: { type: String },
  age: { type: String },
  whatBringsYouHere: { type: String },
  worries: { type: String },
  happies: { type: String },
  interests: { type: String },
  favouriteAnimal: { type: String },
  hopeToGain: { type: String },
  journals: [ journalSchema ],
  sessions: [{
    session: {type: String},
    timeStamp: {type: Date}
  }],
  imageChoice: [{ type: String }],
  isFirstTime: {type: Boolean, default: true},
  mood: [{
    mood: {type: String},
    value: {type: Number},
    timeStamp: { type: Date }
  }]
}, { timestamps: { createdAt: 'created_at' }});

function setPassword(value){
  this._password = value;
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}

function preValidate(next) {
  if (this.isNew) {
    if (!this._password) {
      this.invalidate('password', 'A password is required.');
    }
  }

  if(this._password) {
    if (this._password.length < 6) {
      this.invalidate('password', 'must be at least 6 characters.');
    }

    if (this._password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Passwords do not match.');
    }
  }
  next();
}

function preSave(next) {
  if(this._password) {
    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
  }

  next();
}

userSchema
  .virtual('password')
  .set(setPassword);

userSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

userSchema.methods.validatePassword = validatePassword;

userSchema.pre('validate', preValidate);

userSchema.pre('save', preSave);

userSchema.set('toJSON', {
  transform: function(doc, json) {
    delete json.passwordHash;
    delete json.email;
    delete json.__v;
    return json;
  }
});


// module.exports = mongoose.model('User', userSchema);
// module.exports = mongoose.model('Journal', journalSchema);

module.exports = {
  UserModel: mongoose.model('User', userSchema),
  JournalModel: mongoose.model('Journal', journalSchema)
};
