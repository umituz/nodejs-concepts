const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Models
const Book = require('../models/Book');
const User = require('../models/User');

router.post('/new', function(req, res) {
  const book = new Book({
    title:'Sefiller',
    published:true,
    comments:[
      { message:'Harika Bir Kitap...' },
      { message:'Hiç Güzel Değil...' }
    ],
    year:1800,
    category:'Siyaset',
    meta:{
        votes:25,
        favs:80
    }
  });
  book.save((err,data) => {
    if(err)
      res.json(err);
    res.json(data);
  });
});

router.post('/new-user', function(req, res) {
  const user = new User({
    full_name:'UZ Umut',
    age:23
  });
  user.save((err,data) => {
    if(err)
      res.json(err);
    res.json(data);
  });
});

router.get('/search', (req,res) => {
  Book.find({
    category:{
      $exists:true
    }
  }, 'title comments category' , (err,data) => {
    if(err)
      throw err;
    res.json(data);
  });
});

router.get('/search-all', (req,res) => {
  Book.find({ }, 'title' , (err,data) => {
    if(err)
      throw err;
    res.json(data);
  });
});

router.get('/search-one', (req,res) => {
  Book.findOne({ title:'Deneme' }, (err,data) => {
    if(err)
      throw err;
    res.json(data);
  });
});

router.get('/search-by-id', (req,res) => {
  Book.findById('5bd84ab7ce119b14c4fe6a41', (err,data) => {
    if(err)
      throw err;
    res.json(data);
  });
});

router.put('/update', (req,res) => {
  // update metodu ilk bulduğu kaydı günceller diğerlerine karışmaz.
  // birden fazla alanı güncellemek istiyorsan multi true yapılmalı.
  Book.update
  (
    {
      published:false
    },
    {
      published:true,
      title:'Hiç Işık Yok, Farkındayım'
    },
    {
      // multi:true
      upsert:true
    },
    (err,data) => {
      if(err)
        throw err;
      res.json(data);
    }
  );
});

router.put('/update-by-id', (req,res) => {
  Book.findByIdAndUpdate
  (
    '5bd849b27ba445253cd47c41',
    {
      title : 'Bu okyanusdayım',
      'meta.favs' : 1000
    },
    (err,data) => {
      if(err)
        throw err;
      res.json(data);
    }
  );
});

/*
Silme işlemlerini birden fazla yöntem ile gerçekleştirebiliriz.
findById =>  remove()
findOne =>  remove()
findOneAndRemove
findByIdAndRome
f
*/
router.delete('/remove', (req,res) => {
  // 3.Yöntem
  Book.remove({ published:false }, (err,data) => {
    if(err)
      throw err;
    res.json(data);
  });


  // 2.yöntem
  // Book.findByIdAndRemove('5bd85cfca430cd240c2dfbec', (err,data) => {
  //   if(err)
  //     throw err;
  //   res.json(data);
  // });

  // 1. Yöntem
  // Book.findById('5bd85bce5413b7243017c713', (err,book) => {
  //   if(err)
  //     throw err;
  //   book.remove((err,data) => {
  //     if(err)
  //       throw err;
  //     res.json(data);
  //   });
  // });
});

router.get('/sort', (req,res) => {
  Book.find({}, (err,data) => {
    res.json(data);
  }).sort({ 'title' : 1 });
  // Küçükten büyüğe sıralamak için 1
  // Büyükten küçüğe sıralamak için -1
  // Birden fazla sıralama kullanılabilir. örn; { 'meta.votes' : -1, 'title' : 1 }
});

router.get('/limit-and-skip', (req,res) => {
  Book.find({}, (err,data) => {
    res.json(data);
  }).skip(2).limit(1);
});

// Kümeleme İşlemleri - aggregate
router.get('/aggregate', (req,res) => {
  Book.aggregate([
    {
      $match: {
        published:true
      }
    },
    /*{
      $group: {
        _id: "$category",
        total:{ $sum: 1 } // kaçar kaçar toplayacağı
      }
    }*/
    {
      $project:{
        title:1,
        meta:true
      }
    },
    {
      $sort:{
        title: -1
      }
    },
    {
      $skip : 1
    },
    {
      $limit : 3
    },

  ], (err,result) => {
    if(err)
      console.log(err);
    res.json(result);
  });
});

// Relational
router.get('/aggregate-lookup', (req,res) => {
  Book.aggregate([
    {
      $match :{
        _id:mongoose.Types.ObjectId('5bdb26267afff70c2879d678')
      }
    },
    {
      $lookup:{
        from:'users',
        localField:'user_id',
        foreignField:'_id',
        as:'user'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project:{
        title:true,
        user:'$user',
      }
    }
  ], (err,result) => {
    res.json(result);
  });
});

module.exports = router;
