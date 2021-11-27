const express = require('express');
const router = express.Router();

router.get('/user',(req,res,next) => {
  const user = false;
  if(user)
    res.send('User Page');
  else
    return next({ status:404, message:'No user'});
});

module.exports = router;
