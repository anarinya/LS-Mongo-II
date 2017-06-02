const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set environment variables from file
require('dotenv').config({ path: 'variables.env' });

// setup mongoose
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
// catch db connection errors
mongoose.connection.on('error', (err) => {
  console.log(`☠️⚡: ${err}`);
});

// setup app
const app = express();

// setup app middleware
app.use(bodyParser.json());

// wrap app with controllers
require('./controllers')(app);

// startup app
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}.`);
});

