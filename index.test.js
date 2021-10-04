const { app } = require('./index')
const supertest = require ('supertest')

describe("health check API", () => {
    it("Check that health check API returns 200 on /", async () => {
        expect(1).toBe(1)
        const res = await supertest(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toStrictEqual({data: 'Health check api'});
    })
})
