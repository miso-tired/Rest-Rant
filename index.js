require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World HAHA!')
})

app.get('*', (req, res) => {
    res.status('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)