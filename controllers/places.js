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
    console.log(req.body)
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
    res.send('POST /places')
  })
  

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/H-Thai-ML.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cat-Cafe.jpg'
      }]
      res.render('places/index', { places })
  })
  

module.exports = router