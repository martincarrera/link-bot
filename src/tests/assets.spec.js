const request = require('supertest');
const app = require('./helpers/mock.app');
const newLink = require('./helpers/newLink');

test('should create a new Asset', () => {
  return request(app)
    .post('/api/slack')
    .set('Accept', 'application/json')
    .send(newLink)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      expect(res.status).toBe(201);
      expect(res.status).toBe(201);
      expect(res.body.response_type).toBe('in_channel');
      // res.body.text.should.eql(`The link https://site${newLink.suffix}.com was added successfully by ${newLink.user_name}`);
    });
});
