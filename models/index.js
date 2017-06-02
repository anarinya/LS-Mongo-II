const mongoose = require('mongoose');

module.exports = {
  User: mongoose.model('User', require('./user')),
  Food: mongoose.model('Food', require('./food'))
};