const express = require('express');
const router = express.Router();

router.get('/signin',(req,res) => {
  res.send('Sign in page with Get Method');
});

router.post('/signin',(req,res) => {
  res.send('Sign in page with Post Method');
});

module.exports = router;
