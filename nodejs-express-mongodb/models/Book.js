const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  type
  default
  required
  unique
*/

const BookSchema = new Schema({
  title:{
    type:String,
    required:[true,'`{PATH}` alanı zorunludur.'],
    maxlength:[20,'`{PATH}` alanının değeri (`{VALUE}`), en fazla {MAXLENGTH} karakter olabilir.'],
    minlength:[5,'`{PATH}` alanının değeri (`{VALUE}`), en az {MINLENGTH} karakter olabilir.'],
  },
  published:{
    type:Boolean,
    default:true
  },
  category:{
    type:String,
    required:true
  },
  year:{
    type:Number,
    max:[2050,'`{PATH}` alanının değeri (`{VALUE}`), en fazla {MAX} olabilir.'],
    min:[1800,'`{PATH}` alanının değeri (`{VALUE}`), en az {MIN} olabilir.']
  },
  publishedAt:{
    type:Date,
    default:Date.now()
  },
  comments:[{ message:String }],
  meta:{
    votes:Number,
    favs:Number
  }
});

module.exports = mongoose.model('book',BookSchema);
