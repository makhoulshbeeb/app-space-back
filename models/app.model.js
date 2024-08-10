const mongoose = require('mongoose');
const { Schema } = mongoose;


const appSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: { type: String, required: true },
});

module.exports = appSchema;
