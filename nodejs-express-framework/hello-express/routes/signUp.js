const express = require('express');
const router = express.Router();

router.get('/signUp',(req,res) => {
  res.send('Sign up page with Get Method');
});

router.post('/signUp',(req,res) => {
  res.send('Sign up page with Post Method');
});

module.exports = router;
