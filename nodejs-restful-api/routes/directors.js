const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Director Model
const Director = require('../models/Director');

/* GET home page. */
router.get('/', (req, res, next) => {
  const promise = Director.aggregate([
    {
      $lookup:{
        from:'movies',
        localField:'_id',
        foreignField:'director_id',
        as:'movies'
      }
    },
    {
      $unwind:{
        path:'$movies',
        preserveNullAndEmptyArrays:true
      }
    },
    {
      $group:{
        _id:{
          _id:'$_id',
          name:'$name',
          surname:'$surname',
          bio:'$bio',
        },
        movies:{
          $push:'$movies'
        }
      }
    },
    {
      $project:{
        _id:'$_id._id',
        name:'$_id.name',
        surname:'$_id.surname',
        bio:'$_id.bio',
        movies:'$movies'
      }
    }
  ]);
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(data);
  });
});

/* POST add a new director to database. */
router.post('/', (req, res, next) => {
  const director = new Director(req.body);
  const promise = director.save();
  promise.then((director) => {
    res.json(director);
  }).catch((err) => {
    res.json(err);
  });
});

/* GET show a director by id*/
router.get('/:director_id', (req, res, next) => {
  const promise = Director.aggregate([
    {
      $match:{
        '_id': mongoose.Types.ObjectId(req.params.director_id)
      }
    },
    {
      $lookup:{
        from:'movies',
        localField:'_id',
        foreignField:'director_id',
        as:'movies'
      }
    },
    {
      $unwind:{
        path:'$movies',
        preserveNullAndEmptyArrays:true
      }
    },
    {
      $group:{
        _id:{
          _id:'$_id',
          name:'$name',
          surname:'$surname',
          bio:'$bio',
        },
        movies:{
          $push:'$movies'
        }
      }
    },
    {
      $project:{
        _id:'$_id._id',
        name:'$_id.name',
        surname:'$_id.surname',
        bio:'$_id.bio',
        movies:'$movies'
      }
    }
  ]);
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(data);
  });
});

/* Update a director by id */
router.put('/:director_id', (req,res,next) => {
  const promise = Director.findByIdAndUpdate(
    req.params.director_id,
    req.body,
    {
      new:true
    }
  );
  promise.then((director) => {
    if(!director)
      res.json({ message:'No directors found', code:404});
    res.json(director);
  }).catch((err) => {
    res.json(err);
  });
});

/* Delete one director by id */
router.delete('/:director_id',(req,res,next) => {
  const promise = Director.findByIdAndRemove(req.params.director_id);
  promise.then((movie) => {
    if(!movie)
      res.json({ message:'No director found', code:404});
    res.json({ status:1 });
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
