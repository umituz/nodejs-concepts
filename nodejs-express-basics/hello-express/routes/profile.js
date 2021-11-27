const express = require('express');
const router = express.Router();

const isLogin = require('../helpers/isLogin');

router.get('/profile',isLogin,(req,res) => {
  res.send('Profile Page');
});

module.exports = router;
