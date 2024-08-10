const mongoose = require('mongoose');
const { Schema } = mongoose;


const appSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'User' },
      review: { type: String },
      rating: { type: Number },
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = appSchema;
