const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  }
});

FoodSchema.pre('save', function(next) {
  console.log('Food: I am about to be saved!');
  console.log(this);
  next();
});

module.exports = FoodSchema;