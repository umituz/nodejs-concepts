const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token, movieId;
describe('GENERAL TEST FOR MOVIE ROUTES /api/movies',() => {
  before((done) => {
    chai.request(server)
        .post('/authenticate')
        .send({ username:'test',password:'123456'})
        .end((err,res) => {
          token = res.body.token;
          done();
        });
  });

  describe('GET ALL MOVIES FOR /api/movies WITH GET METHOD', () => {
    it("It should GET all the movies", (done) => {
      chai.request(server)
          .get('/api/movies')
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
    });
  });

  describe('POST A NEW MOVIE FOR /api/movies WITH POST METHOD', () => {
    it('It should POST a new movie', (done) => {
      const movie = {
        title:'Test Title',
        director_id:'5be3830764b79d27fcf26d27',
        category:'Test Category',
        country:'Türkiye',
        year:'1996',
        imdb_score:5
      };
      chai.request(server)
          .post('/api/movies')
          .send(movie)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('director_id');
            res.body.should.have.property('category');
            res.body.should.have.property('country');
            res.body.should.have.property('year');
            res.body.should.have.property('imdb_score');
            movieId = res.body._id;
            done();
          });
    });
  });

  describe('GET JUST ONE MOVIE BY ID /api/movies/:movie_id WITH GET METHOD', () => {
    it('It should GET a movie by given id',(done) => {
      chai.request(server)
          .get('/api/movies/'+movieId)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('director_id');
            res.body.should.have.property('category');
            res.body.should.have.property('country');
            res.body.should.have.property('year');
            res.body.should.have.property('imdb_score');
            res.body.should.have.property('_id').eql(movieId);
            done();
          });
    });
  });

  describe('PUT THE MOVIE FOR /api/movies/:movie_id WITH PUT METHOD', () => {
    it('It should put the movie by given id', (done) => {
      const movie = {
        title:'Cehennem Melekleri',
        director_id:'5be3830764b79d27fcf26d27',
        category:'Aksiyon',
        country:'Usa',
        year:2013,
        imdb_score:9
      };
      chai.request(server)
          .put('/api/movies/'+movieId)
          .send(movie)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql(movie.title);
            res.body.should.have.property('director_id').eql(movie.director_id);
            res.body.should.have.property('category').eql(movie.category);
            res.body.should.have.property('country').eql(movie.country);
            res.body.should.have.property('year').eql(movie.year);
            res.body.should.have.property('imdb_score').eql(movie.imdb_score);
            done();
          });
    });
  });

  describe('DELETE THE MOVIE FOR /api/movies/:movie_id WITH DELETE METHOD', () => {
    it('It should delete the movie by given id', (done) => {
      chai.request(server)
          .delete('/api/movies/'+movieId)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(1);
            done();
          });
    });
  });

});
