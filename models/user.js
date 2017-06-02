const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: {
      validator: (email) => {
        return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );
      },
      message: `Please enter a valid email address.`
    }
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => {
        return password.length > 4;
      },
      message: 'Please enter a password with more than 4 characters.'
    }
  },
  firstName: {
    type: String
  },
  favoriteFoods: [
    {
      type: Schema.ObjectId,
      ref: 'Food'
    }
  ]
});

UserSchema.pre('save', function(next) {
  console.log('I am about to be saved!');
  console.log(this);
  next();
});

module.exports = UserSchema;
