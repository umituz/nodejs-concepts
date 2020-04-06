const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  full_name:{
    type:String,
    required:true
  },
  age:{
    type:Number
  },
});

module.exports = mongoose.model('user',UserSchema);
