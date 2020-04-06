const express = require('express');
const router = express.Router();

// Movie Models File
const Movie = require('../models/Movie');

/* GET movies listing. */
router.get('/',(req,res) => {
  const promise = Movie.aggregate([
    {
      $lookup:{
        from:'directors',
        localField:'director_id',
        foreignField:'_id',
        as:'director'
      }
    },
    {
      $unwind:'$director'
    }
  ]);
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

/* POST a new movie */
router.post('/', (req, res, next) => {
  // const { title, imdb_score, year, category, country } = req.body;
  const movie = new Movie(req.body);
  const promise = movie.save();
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

/* GET Top 10 movies listing. */
router.get('/top10',(req,res) => {
  const promise = Movie.find({}).limit(10).sort({ imdb_score:-1 });
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

/* Get just one movie by id */
router.get('/:movie_id',(req,res,next) => {
  const promise = Movie.findById(req.params.movie_id);
  promise.then((movie) => {
    if(!movie)
      res.json({ message:'No movie found', code:404});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

/* Update a movie by id */
router.put('/:movie_id', (req,res,next) => {
  const promise = Movie.findByIdAndUpdate(
    req.params.movie_id,
    req.body,
    {
      new:true
    }
  );
  promise.then((movie) => {
    if(!movie)
      res.json({ message:'No movie found', code:404});
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

/* Delete one movie by id */
router.delete('/:movie_id',(req,res,next) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id);
  promise.then((movie) => {
    if(!movie)
      res.json({ message:'No movie found', code:404});
    res.json({ status:1 });
  }).catch((err) => {
    res.json(err);
  });
});

/* GET movies between two dates. */
router.get('/between/:start_year/:end_year',(req,res) => {
  const { start_year, end_year } = req.params;
  // gte buyük eşittir gt büyük
  // lte buyük eşittir lt küçük
  const promise = Movie.find(
    {
      year:{ "$gt": parseInt(start_year), "$lt": parseInt(end_year) }
    }
  );
  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
