var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');

var should = chai.should();
chai.use(chaiHttp);

describe('API Routes', function(){

  describe('GET /', () => {
    it('should return all shows', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(3);
          res.body[0].should.have.property('id');
          res.body[0].id.should.equal(1);
          res.body[0].should.have.property('title');
          res.body[0].title.should.equal('chief senior officer');
          res.body[0].should.have.property('description');
          res.body[0].description.should.equal('play all day');
          res.body[0].should.have.property('company');
          res.body[0].company.should.equal('Google');
          res.body[0].should.have.property('email');
          res.body[0].email.should.equal('boss@example.com');
          res.body[0].should.have.property('contacted');
          res.body[0].contacted.should.equal(true);
          done();
        });
    })
  });
});

