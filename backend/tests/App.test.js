const request = require('supertest')
const app = require('../server')
test('Adding User information', async () => {
    await request(app).post('/api/user/add')
    .send({
        name : "jathu",
        city : "jaffna",
        email : "jathusanan@gmail.com",
        qualification:"BSC"
       
    })
    .expect(200);


})

test('Getting User information', async () => {
    await request(app)
    .get('/api/user')
    .expect('Content-Type', /json/)
    .expect(200);


})

test('Getting Research Information', async () => {
    await request(app)
    .get('/api/getSingleFiles')
    .expect('Content-Type', /json/)
    .expect(200);


})

test('Getting Workshop Information', async () => {
    await request(app)
    .get('/api/getworkshop')
    .expect('Content-Type', /json/)
    .expect(200);


})
