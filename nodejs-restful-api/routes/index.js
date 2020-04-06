const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User model
const User = require('../models/User');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Respect JS' });
});

/* POST add a new user. */
router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password,10).then((hash) => {
    const user = new User({
      username,
      password:hash
    });
    const promise = user.save();
    promise.then((user) => {
      res.json(user);
    }).catch((err) => {
      res.json(err);
    });
  });
});

/* POST authentication. */
router.post('/authenticate', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err,user) => {
    if(err)
      throw err;
    if(!user){
      res.json({
        status:false,
        message: 'Authentication failed, user not found'
      });1
    }else{
      bcrypt.compare(password,user.password).then((result) => {
        if(!result){
          res.json({
            status:false,
            message:'Authentication failed, wrong password'
          });
        }else{
          const payload = {
            username
          };
          const token = jwt.sign(payload,req.app.get('api_secret_key'), {
            expiresIn:720 // Dakika olarak hesaplanır. 12 saat boyunca token geçerli.
          });
          res.json({
            status:true,
            token
          });
        }
      });
    }
  });
});

module.exports = router;
