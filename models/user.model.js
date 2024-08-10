const mongoose = require('mongoose');
const { Schema } = mongoose;
const appSchema = require('./app.model');


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  apps: [appSchema]  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
