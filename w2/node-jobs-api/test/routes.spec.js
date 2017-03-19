process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../db/knex');
const models = require('../db/models');

const should = chai.should();
chai.use(chaiHttp);

describe('API Routes', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
  });

  afterEach(() => {
    return knex.migrate.rollback()
  });

  describe('GET /', () => {
    it('should return all shows', () => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          console.log(err);
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
        });
    });
  });

  describe('GET /:id', () => {
    it('should return a single show with the id', () => {
      models.getAllJobs()
        .then(jobs => {
          const job = jobs[0];
          chai.request(server)
            .get(`/${job.id}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('id');
              res.body.should.have.property('title');
              res.body.should.have.property('description');
              res.body.should.have.property('company');
              res.body.should.have.property('email');
              res.body.should.have.property('contacted');
            });
        });
    });
  });

  describe('POST /', () => {
    it('should create a new job', () => {
      chai.request(server)
        .post('/')
        .send({
          title: 'Senior Solutions Architect',
          description: 'Design solutions all day long',
          company: 'NodeGorge',
          email: 'manager@nodegorge.com',
          contacted: false
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(4);
          res.body.should.have.property('title');
          res.body.title.should.equal('Senior Solutions Architect');
          res.body.should.have.property('description');
          res.body.description.should.equal('Design solutions all day long');
          res.body.should.have.property('company');
          res.body.company.should.equal('NodeGorge');
          res.body.should.have.property('email');
          res.body.email.should.equal('manager@nodegorge.com');
          res.body.should.have.property('contacted');
          res.body.contacted.should.equal(false);
        });
    });
    it('should NOT create a job missing a title', () => {
      chai.request(server)
        .post('/')
        .send({
          description: 'Design solutions all day long',
          company: 'NodeGorge',
          email: 'manager@nodegorge.com',
          contacted: false
        })
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.error.should.include('null value in column "title" violates not-null constraint');
        });
    });
  });

  describe ('PUT /:id', () => {
    it ('should update a job', () => {
      chai.request(server)
        .put('/2')
        .send({
          title: 'subservient architect',
          description: 'follow the lead architect',
          company: 'Microsoft',
          email: 'manager@example.com',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(2);
          res.body.should.have.property('title');
          res.body.title.should.equal('subservient architect');
          res.body.should.have.property('description');
          res.body.description.should.equal('follow the lead architect');
        });
    });
  });

  describe('DELETE /:id', () => {
    it('should delete a job', () => {
      chai.request(server)
        .delete('/2')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.status.should.equal('success');
        });

      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(3); // not sure why... but this is failing
        });
    });
  });
});

