require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

// Home Page
app.get('/', (req, res) => { 
    res.render('home')
})

// Index Page
app.get('/places', (req, res) => {
    res.render('index')
})

// Wildcard/404 route
app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)