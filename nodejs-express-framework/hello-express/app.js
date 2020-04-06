const express = require('express');
const app = express();

// const signIn = require('./routes/signIn');
// const signUp = require('./routes/signUp');
// app.use('/user',signIn);
// app.use('/user',signUp);

const user = require('./routes/user');
const profile = require('./routes/profile');

// Helpers
// const isLogin = require('./helpers/isLogin');
// app.use(isLogin);

app.use('/', user);
app.use('/', profile);

app.listen(3000, () => {
  console.log('express server worked');
});
