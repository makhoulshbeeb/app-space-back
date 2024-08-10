const mongoose = require('mongoose');
const { Schema } = mongoose;


const appSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, min:1 ,max:5, required: true },
  reviews: { type: String, required: true },
});

module.exports = appSchema;
