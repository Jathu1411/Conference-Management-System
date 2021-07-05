const request = require('supertest')
const app = require('./AppTest')
app.listen(7000,() => {
    console.log('7000')
})

test('testing user', async () => {
    await request(app).post('/api/user/add')
    .send({
        name : "jathu",
        city : "jaffna"
       
    })
    .expect(500);


})
