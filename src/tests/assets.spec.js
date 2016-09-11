const app = require('./helpers/mock.app');
const request = require('promisify-supertest')(app);
const newLink = require('./helpers/newLink');

describe('/api/assets', () => {
  describe('POST /', () => {
    it('should create a new Asset', () => {
      return request
        .post('/api/slack')
        .set('Accept', 'application/json')
        .send(newLink)
        .expect('Content-Type', /json/)
        .end()
        .then(res => {
          expect(res.status).toBe(201);
          expect(res.body.response_type).toBe('in_channel');
          const actual = res.body.text;
          expect(actual).toMatchSnapshot();
        });
    });
  });

  describe('GET / & GET /:id', () => {
    it('should retreive all the assets & should retreive an asset by id', () => {
      return request
        .get('/api/assets')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end()
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.body.length).toBeGreaterThan(0);
          const last = res.body.length - 1;
          expect(res.body[last].link).toMatchSnapshot();
          expect(res.body[last].categories.length).toBeGreaterThan(0);
          expect(res.body[last].tags.length).toBeGreaterThan(0);

          const _id = res.body[last]._id;
          return _id;
        })
        .then(_id => {
          return request
            .get(`/api/assets/${_id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end()
            .then(resSingle => {
              expect(resSingle.status).toBe(200);
              expect(resSingle.body.link).toMatchSnapshot();
            });
        });
    });
  });
});
