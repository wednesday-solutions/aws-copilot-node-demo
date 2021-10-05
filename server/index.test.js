const { app, init } = require('./index');
const supertest = require('supertest');

describe('health check API', () => {
  it('Check that health check API returns 200 on /', async () => {
    const res = await supertest(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({ data: 'Service up and running!' });
  });
});
describe('init', () => {
  it('should only invoke the app.listen when the NODE_ENV is not test', () => {
    process.env.NODE_ENV = 'production';
    const listenSpy = jest.spyOn(app, 'listen').mockReturnValue({});
    init();
    expect(listenSpy).toBeCalled();
    process.env.NODE_ENV = 'test';
  });
});
