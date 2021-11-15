const express = require('express');
const mongoose = require('mongoose');
const authenticationRouter = require('./routes/authenticationRouter');
const usersRouter = require('./routes/usersRouter');
const messagesRouter = require('./routes/messagesRouter');
const config = require('./config');
const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to chat database');
  })
  .catch(err => {
    console.error(err);
  });

app.use(express.json());
app.use('/api/authentication', authenticationRouter);
app.use('/api/users', usersRouter);
app.use('/api/messages', messagesRouter);

module.exports = app;