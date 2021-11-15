const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String},
  name: {type: String},
  age: {type: Number},
  gender: {type: String},
  bio: {type: String},
  friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  date_of_creation: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

module.exports = User;