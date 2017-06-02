const { User } = require('../models');

const getUsers = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.send(err));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.send(err));
};

const removeUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      User.remove()
        .then(removedUser => res.send(removedUser))
        .catch(err => res.send(err));
    })
    .catch(err => res.send(err));
};

const addUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(kitten => res.send(kitten))
    .catch(err => res.send(err));
};

module.exports = (app) => {
  app.get('/users', getUsers);
  app.get('/users/:id', getUserById);
  app.post('/users', addUser);
  app.delete('/users/:id', removeUserById);
};