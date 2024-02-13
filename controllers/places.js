const router = require('express').Router()
const places = require('../models/placesarray.js')

// GET /places/new
router.get ('/new', (req, res) => {
    res.render('places/new')
})

// POST /places
router.post('/', (req, res) => {
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Random City'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
// GET /places
router.get('/', (req, res) => {
      res.render('places/index', { places })
  })


// Error 404 Page
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id })
    }
})

module.exports = router