const app = require('./helpers/mock.app');
const request = require('promisify-supertest')(app);
const newCategory = require('./helpers/newCategory');

describe('/api/categories', () => {
  describe('POST /', () => {
    it('should create a new Category', () => {
      return request
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send({ name: newCategory.name })
        .expect('Content-Type', /json/)
        .end()
        .then(res => {
          expect(res.status).toBe(201);
          expect(res.body.name).toBe(newCategory.name);
        });
    });
  });

  describe('GET /', () => {
    it('should retreive all the categories', () => {
      return request
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end()
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.body.length).toBeGreaterThan(0);
          const last = res.body.length - 1;
          expect(res.body[last].name).toBe(newCategory.name);
        });
    });
  });
});
