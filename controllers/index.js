module.exports = (app) => {
  require('./home')(app);
  require('./food')(app);
  require('./user')(app);
};