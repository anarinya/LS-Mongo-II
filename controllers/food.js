const { Food, User } = require('../models');

const getFoods = (req, res) => {
  Food.find()
    .then(foods => res.send(foods))
    .catch(err => res.send(err));
};

const getFoodById = (req, res) => {
  Food.findById(req.params.id)
    .then(food => res.send(food))
    .catch(err => res.send(err));
};

const getFoodsByUserId = (req, res) => {
  User.findById(req.params.userId)
    .populate('favoriteFoods')
    .then((user) => res.send(user.favoriteFoods))
    .catch(err => res.send(err));
};

const addFoodToUser = (req, res) => {
  const newFood = new Food(req.body);
  User.findById(req.params.userId)
    .then((user) => {
      newFood.save()
        .then((newFood) => {
          user.favoriteFoods.push(newFood);
          user.save()
            .then(user => res.send(user))
            .catch(err => res.send(err));
        })
        .catch(err => res.send(err));
    })
    .catch(err => res.send(err));
};

const removeFoodById = (req, res) => {
  const foodId = req.params.id;
  Food.findByIdAndRemove(foodId)
    .then(() => res.send('food removed'))
    .catch(err => res.send(err));
};

module.exports = (app) => {
  app.get('/foods', getFoods);
  app.get('/foods/:id', getFoodById);
  app.delete('/foods/:id', removeFoodById);
  app.put('/users/:userId/foods', addFoodToUser);
  app.get('/users/:userId/foods', getFoodsByUserId);
};