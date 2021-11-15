const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.verifyLogin = async function(req, res) {
  
  const user = await User.findOne({username: req.body.username});
  
  if(user) {
    const passCorrect = await bcrypt.compare(req.body.password, user.password);
    (passCorrect) ? res.status(200).send('user exists') : 
      res.status(404).send('incorrect password');
  } else {
    res.status(404).send('incorrect username');
  }

};

exports.newUser = async function(req, res) {
  
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const userObj = new User(req.body);
  
  await userObj.save((err, result) => {
    if(err) {
      console.error(err);
      if(err.code == 11000) {
        res.status(400).send('Username is not unique');    
      }
      res.status(400).send('Data validation failed');
    } else {
      res.status(201).send(result);
    }
  });
};