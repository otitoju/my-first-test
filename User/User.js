const mongoose = require('mongoose');
//DATABASE TABLE FOR USER
const UserSchema = new mongoose.Schema({  
    name: String,
    email: String,
    password: String
  });
  mongoose.model('User', UserSchema);
  module.exports = mongoose.model('User');