const router = require('express').Router()
const places = require('../models/placesarray.js')

// GET /places/new
router.get ('/new', (req, res) => {
    res.render('places/new')
})

// POST /places
//     router.post('/', (req, res) => {
//     const newPlace = { ...req.body };
//     if (!newPlace.pic) {
//         newPlace.pic = 'https://via.placeholder.com/300';
//     }
//     if (!newPlace.city) {
//         newPlace.city = 'Unknown';
//     }
//     if (!newPlace.state) {
//         newPlace.state = 'USA';
//     }
//     places.push(req.body);
//     res.redirect('/places');
// });

router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai-Restaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Coding-Cat.jpg'
      }]
      res.render('places/index', { places })
  })
  
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id] })
    }
  })
  

module.exports = router