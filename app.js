const express = require('express');
const app = express();

app.use('/', (req, res) => {
	res.send('home page');
});

module.exports = app;