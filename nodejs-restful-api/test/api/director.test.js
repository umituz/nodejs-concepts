const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token, directorId;
describe('GENERAL TEST FOR DIRECTOR ROUTES /api/directors', () => {
  before((done) => {
    chai.request(server)
        .post('/authenticate')
        .send({ username:'test',password:'123456'})
        .end((err,res) => {
          token = res.body.token;
          console.log(token);
          done();
        });
  });

  describe('GET ALL DIRECTORS FOR /api/directors WITH GET METHOD',() => {
    it('It should GET all the directors', (done) => {
      chai.request(server)
          .get('/api/directors')
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
    });
  });

  describe('POST A NEW DIRECTOR FOR /api/directors WITH POST METHOD', () => {
    it('It should POST a new director', (done) => {
      const director = {
        name:'Umut',
        surname:'UZ',
        bio:'Kendi halinde...',
        createdAt:Date.now
      };
      chai.request(server)
          .post('/api/directors')
          .send(director)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('surname');
            res.body.should.have.property('bio');
            res.body.should.have.property('createdAt');
            directorId = res.body._id;
            done();
          });
    });
  });

  describe('GET JUST ONE DIRECTOR BY ID /api/directors/:director_id WITH GET METHOD', () => {
    it('It should GET a director by given id',(done) => {
      chai.request(server)
          .get('/api/directors/'+directorId)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
    });
  });

  describe('PUT THE DIRECTOR FOR /api/directors/:director_id WITH PUT METHOD', () => {
    it('It should PUT the director by given id', (done) => {
      const director = {
        name:'YORGUN',
        surname:'ZAMAN',
        bio:'DENEME bıografi oykusu',
        createdAt:Date.now
      };
      chai.request(server)
          .put('/api/directors/'+directorId)
          .send(director)
          .set('x-access-token',token)
          .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('surname');
            res.body.should.have.property('bio');
            res.body.should.have.property('createdAt');
            done();
          });
    });
  });

  describe('DELETE THE DIRECTOR FOR /api/directors/:director_id WITH DELETE METHOD', () => {
    it('It should DELETE the director by given id', (done) => {
      chai.request(server)
          .delete('/api/directors/'+directorId)
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
