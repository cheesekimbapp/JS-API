const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Routes/URL/endpoint utama dengan method GET
app.get('/', (request, response) => {
    response.send('Hello lalalala')
})

// Routes/URL/endpoint utama dengan method GET untuk menampilkan data
app.get('/hello', (req, res) => {
    console.log({ urlParam: req.query})
    res.send('Hello World!')
})

// Routes/URL/endpoint utama dengan method POST
app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
        res.send('Login Success')
})
// Routes/ULR/endpoint utama dengan method PUT
app.put('/username', (req, res) => {
    console.log({ updateData: req.body })
        res.send('Update Success')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})