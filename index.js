require('dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers and Routes
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