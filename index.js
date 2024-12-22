const express = require('express')
const app = express()
const port = 3000

// Routes/URL/endpoint utama dengan method GET
app.get('/', (request, response) => {
    response.send('Hello')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    if(req.name === "muchtar") {
        res.send('Login Success')
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})