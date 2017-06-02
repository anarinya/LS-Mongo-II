const getHome = (req, res) => {
  res.send('Hello, World!');
};

module.exports = (app) => {
  app.get('/', getHome);
};