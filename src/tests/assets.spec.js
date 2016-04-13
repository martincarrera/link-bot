'use strict';

require('should');

var request = require('supertest');
var app = require('./helpers/mock.app');
const newLink = require('./helpers/newLink');

describe('Server API', function () {
  this.timeout(15000);

  describe('/api/assets', () => {
    describe('POST /', () => {
      it('should create a new Asset', done => {
        request(app)
          .post('/api/slack')
          .set('Accept', 'application/json')
          .send(newLink)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(201);
            res.body.text.should.eql(`The link https://site${newLink.suffix}.com was added successfully by ${newLink.user_name}`);
            res.body.response_type.should.eql('in_channel');

            done();
          });
      });
    });

    describe('GET /', () => {
      it('should retreive all the assets', done => {
        request(app)
          .get('/api/assets')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            res.status.should.eql(200);
            res.body.length.should.be.above(0);
            const last = res.body.length - 1;
            res.body[last].link.should.eql(`https://site${newLink.suffix}.com`);
            res.body[last].categories.length.should.be.above(0);
            res.body[last].tags.length.should.be.above(0);

            const _id = res.body[last]._id;

            describe('GET /api/assets/:id', () => {
              it('should return a single asset', done => {
                request(app)
                  .get(`/api/assets/${_id}`)
                  .set('Accept', 'application/json')
                  .expect('Content-Type', /json/)
                  .end((err, resSingle) => {
                    resSingle.status.should.eql(200);
                    resSingle.body.link.should.eql(`https://site${newLink.suffix}.com`);
                    done();
                  });
              });
            });

            done();
          });
      });
    });
  });
});
