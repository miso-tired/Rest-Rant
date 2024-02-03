require('dotenv').config()

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello World HAHA!')
})


// Wildcard/404 route
app.get('*', (req, res) => {
    res.status('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)