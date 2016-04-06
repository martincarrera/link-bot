'use strict';

var should = require('should');
var request = require('supertest');
var app = require('./mock.app');

describe('Server API', function () {
  this.timeout(15000);

  describe('/api', () => {
    describe('POST /',  () => {

      const newLink = require('./newLink');


      it('should create a new Link', done => {
        request(app)
          .post('/api')
          .set('Accept', 'application/json')
          .send(newLink)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(201);
            res.body.text.should.eql(`The link https://facebook.com was added successfully by ${newLink.user_name}`);
            res.body.response_type.should.eql('in_channel');

            done();
          });
      });
    });

    describe('GET /',  () => {

      it('should create a new Link', done => {
        request(app)
          .get('/api')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(200);
            res.body.length.should.be.above(0);
            // res.body[0].link.should.eql('https://facebook.com'); TODO: fix https getting replaced with http
            res.body[0].categories.length.should.be.above(0);
            res.body[0].tags.length.should.be.above(0);

            done();
          });
      });
    });
  });
});
